import React, { Suspense } from 'react';
import AuthForm from '@/features/auth/components/AuthForm';
import Logo from '@/shared/components/Logo';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Routes from '@/constants/routes';

export default async function AuthPage() {
  const client = await createClient();
  const session = await client.auth.getUser();

  if (session?.data.user) {
    redirect(Routes.DASHBOARD_DESIGN);
  }
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-md flex flex-col gap-12 items-center'>
        <div className='flex flex-col items-center'>
          <Logo />
        </div>
        <Suspense>
          <AuthForm />
        </Suspense>
      </div>
    </div>
  );
}
