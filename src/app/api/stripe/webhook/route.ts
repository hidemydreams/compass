import { NextResponse, NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { SubscriptionStatus } from '@prisma/client';
import * as Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get('Stripe-Signature');

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    switch (event.type) {
      // charge.succeeded, payment_intent.succeeded?? ocurs when initial payment is successfull
      case 'checkout.session.completed':
        await handleSubscriptionCreated(event.data.object);
        break;
      // occurs when subscription is updated, in our case it gets updated when user cancels it until end of period
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object);
        break;
      // occurs when renewal was successfull
      case 'invoice.payment_succeeded':
        await handleSubscriptionRenewed(event.data.object);
        break;
      // occurs when subscription is canceled fully
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;
    }

    return NextResponse.json({
      status: 'success',
      event: event.type,
      response: res,
    });
  } catch (error) {
    return NextResponse.json({ status: 'Failed', error });
  }
}

async function handleSubscriptionCreated(
  session: Stripe.Stripe.Checkout.Session,
) {
  const user = await prisma.user.findUnique({
    where: { stripeCustomerId: session.customer as string },
    include: { subscriptions: true },
  });

  if (!user) return;

  const existingSubscription = user.subscriptions.find(
    (sub) =>
      sub.status === SubscriptionStatus.CANCELED ||
      sub.status === SubscriptionStatus.EXPIRED,
  );

  if (existingSubscription) {
    // 🛠 Update the existing subscription
    await prisma.subscription.update({
      where: { id: existingSubscription.id },
      data: {
        stripeSubId: session.subscription as string,
        currentPeriodEnd: new Date(session.expires_at * 1000),
        status: SubscriptionStatus.ACTIVE,
        stripePriceId: 'some id of the price dont know if i need it',
        cancelAtPeriodEnd: false, // Reset in case they had canceled before
      },
    });
  } else {
    // ✅ No existing subscription → Create a new one
    await prisma.subscription.create({
      data: {
        userId: user.id,
        stripeSubId: session.subscription as string,
        currentPeriodEnd: new Date(session.expires_at * 1000),
        status: SubscriptionStatus.ACTIVE,
        stripePriceId: 'some id of the price dont know if i need it',
      },
    });
  }
}

async function handleSubscriptionRenewed(invoice: Stripe.Stripe.Invoice) {
  await prisma.subscription.update({
    where: { stripeSubId: invoice.subscription as string },
    data: {
      currentPeriodEnd: new Date(invoice.period_end * 1000),
      status: SubscriptionStatus.ACTIVE,
      cancelAtPeriodEnd: false,
    },
  });
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Stripe.Subscription,
) {
  const isRequestToCancel =
    subscription.cancellation_details?.reason === 'cancellation_requested';

  if (isRequestToCancel) {
    return prisma.subscription.update({
      where: { stripeSubId: subscription.id },
      data: {
        cancelAtPeriodEnd: true,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      },
    });
  }

  return prisma.subscription.update({
    where: { stripeSubId: subscription.id },
    data: {
      cancelAtPeriodEnd: false,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
  });
}

const handleSubscriptionDeleted = async (
  subscription: Stripe.Stripe.Subscription,
) => {
  await prisma.subscription.update({
    where: { stripeSubId: subscription.id },
    data: {
      status: SubscriptionStatus.CANCELED,
      currentPeriodEnd: new Date(subscription.current_period_end),
    },
  });
};

async function handlePaymentFailed(invoice: Stripe.Stripe.Invoice) {
  await prisma.subscription.updateMany({
    where: { stripeSubId: invoice.subscription as string },
    data: { status: SubscriptionStatus.EXPIRED },
  });

  //TODO: notify user via email that subscription was failed

  // const user = await prisma.user.findFirst({
  //   where: { stripeCustomerId: invoice.customer },
  // });

  // sendEmail(user.email, "Payment Failed", "Update your card to keep your subscription.");
}
