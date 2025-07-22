'use client';

import { CardDescription, CardTitle } from '@/shared/components/ui/card';
import { Label } from '@/shared/components/ui/label';
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';
import { TabsContent } from '@/shared/components/ui/tabs';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@/app/login/actions';

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseError, setResponseError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSignIn = async (data: Inputs) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const res = await login(formData);

    if (res && !res.success) {
      setResponseError(res.error);
    }

    setIsLoading(false);
  };

  return (
    <TabsContent value='login' className='space-y-4 mt-0'>
      <div className='text-center space-y-2'>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </div>

      <form onSubmit={handleSubmit(onSignIn)} className='space-y-4'>
        <div className='space-y-1'>
          <Label htmlFor='email'>Email</Label>
          <div className='relative'>
            <Mail className='absolute left-3 top-[10px] h-4 w-4 opacity-50' />
            <Input
              error={errors.email?.message}
              id='email'
              type='email'
              placeholder='Enter your email'
              className='pl-10'
              required
              {...register('email')}
            />
          </div>
        </div>

        <div className='space-y-1'>
          <Label htmlFor='password'>Password</Label>
          <div className='relative'>
            <Lock className='absolute left-3 top-[10px] h-4 w-4 opacity-50' />
            <Input
              error={errors.password?.message}
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              className='pl-10 pr-10'
              required
              {...register('password')}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-[10px] opacity-50 hover:opacity-100 transition-opacity'
            >
              {showPassword ? (
                <EyeOff className='h-4 w-4' />
              ) : (
                <Eye className='h-4 w-4' />
              )}
            </button>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <label className='flex items-center space-x-2 text-sm'>
            <input
              type='checkbox'
              className='rounded border-[var(--button-border-color)]'
            />
            <span>Remember me</span>
          </label>
          {/*<button*/}
          {/*  onClick={() => resetPassword(getValues('email'))}*/}
          {/*  type='button'*/}
          {/*  className='text-sm hover:underline'*/}
          {/*>*/}
          {/*  Forgot password?*/}
          {/*</button>*/}
        </div>

        {responseError && (
          <p className='text-red-500 text-xs mt-2 text-left'>{responseError}</p>
        )}

        <Button
          type='submit'
          className='w-full h-11 font-medium transition-all hover:-translate-y-0.5'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
              Signing in...
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              Sign In
              <ArrowRight className='h-4 w-4' />
            </div>
          )}
        </Button>
      </form>
    </TabsContent>
  );
};

export default SignIn;
