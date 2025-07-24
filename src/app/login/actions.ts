// 'use server';
//
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { createClient } from '@/lib/supabase/server';
// import generateUsername from '@/shared/utils/generate-username';
// import { stripe } from '@/lib/stripe';
// import prisma from '@/db/prisma';
// import { getStripeCheckoutUrl } from '@/shared/hooks/use-checkout';
//
// export async function login(
//   formData: FormData,
// ): Promise<{ success: boolean; error: string } | void> {
//   const supabase = await createClient();
//
//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };
//
//   const { error } = await supabase.auth.signInWithPassword(data);
//
//   if (error) {
//     return { success: false, error: error.message };
//   }
//
//   revalidatePath('/', 'layout');
//   redirect('/');
// }
//
// export async function signup(
//   formData: FormData,
//   config?: { redirectToPayment?: boolean },
// ): Promise<{ success: boolean; error: string } | void> {
//   const supabase = await createClient();
//
//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };
//
//   const { error, data: responseData } = await supabase.auth.signUp(data);
//
//   if (error) {
//     return { success: false, error: error.message };
//   }
//
//   if (responseData.user) {
//     // if we are here it means user is signed up for the first time
//     const providedNickname = formData.get('nickname') as string;
//     const username = providedNickname || generateUsername();
//
//     const stripeCustomer = await stripe.customers.create({ email: data.email });
//
//     const user = await prisma.user.create({
//       data: {
//         email: data.email,
//         oauthUserId: responseData.user.id,
//         stripeCustomerId: stripeCustomer.id,
//         profile: {
//           create: {
//             templateId: 'writer',
//             username,
//             settings: {
//               create: {
//                 theme: 'default',
//                 font: 'Roboto',
//               },
//             },
//           },
//         },
//       },
//       include: { profile: true },
//     });
//
//     if (config?.redirectToPayment && user) {
//       const stripeUrl = await getStripeCheckoutUrl(user?.id);
//
//       if (stripeUrl) {
//         redirect(stripeUrl);
//       }
//     }
//
//     revalidatePath('/', 'layout');
//     redirect('/dashboard/design');
//   }
// }
//
// export async function logout() {
//   const supabase = await createClient();
//
//   const { error } = await supabase.auth.signOut();
//
//   if (error) {
//     redirect('/error');
//   }
//
//   revalidatePath('/', 'layout');
//   redirect('/');
// }
//
// export async function resetPassword(
//   email: string,
// ): Promise<{ success: boolean; error: string } | void> {
//   const supabase = await createClient();
//
//   await supabase.auth.resetPasswordForEmail(email);
//
//   const { error } = await supabase.auth.signOut();
//
//   console.log(error);
//
//   if (error) {
//     return { success: false, error: error.message };
//   }
//
//   revalidatePath('/', 'layout');
//   redirect('/');
// }
