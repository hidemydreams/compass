import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const { userId, priceId } = await req.json();

  // TODO: if user have existing plan, return some type of error
  // TODO: if he is not logged in, redirect to the login screen

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user || !user.stripeCustomerId) {
    return NextResponse.json(
      { error: 'User not found or missing Stripe ID' },
      { status: 400 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer: user.stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.APP_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_BASE_URL}/payment/cancel`,
      metadata: { userId: user.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
