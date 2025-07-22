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
import { signup } from '@/app/login/actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Routes from '@/constants/routes';
import { QUERY_PARAMS } from '@/constants/query-params';
import { emailValidation } from '@/shared/validations/validations';

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
};

const schema = yup.object({
  email: emailValidation,
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], 'You must agree to terms and conditions')
    .required('You must agree to terms and conditions'),
});

const SignUp = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const params = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [responseError, setResponseError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSignUp = async (data: Inputs) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);
    formData.append('nickname', params.get(QUERY_PARAMS.NICKNAME) || '');

    const config = {
      redirectToPayment: Boolean(params.get(QUERY_PARAMS.REDIRECT_TO_PAYMENT)),
    };

    const res = await signup(formData, config);

    if (res && !res.success) {
      setResponseError(res.error);
    }

    setIsLoading(false);
  };

  return (
    <TabsContent value='signup' className='space-y-4 mt-0'>
      <div className='text-center space-y-2'>
        <CardTitle>Create account</CardTitle>
        <CardDescription>
          Join us and start building your link hub
        </CardDescription>
      </div>

      <form onSubmit={handleSubmit(onSignUp)} className='space-y-4'>
        <div className='space-y-1'>
          <Label htmlFor='signup-email'>Email</Label>
          <div className='relative'>
            <Mail className='absolute left-3 top-[10px] h-4 w-4 opacity-50' />
            <Input
              id='signup-email'
              type='email'
              placeholder='Enter your email'
              className='pl-10'
              required
              {...register('email')}
              error={errors.email?.message}
            />
          </div>
        </div>

        <div className='space-y-1'>
          <Label htmlFor='signup-password'>Password</Label>
          <div className='relative'>
            <Lock className='absolute left-3 top-[10px] h-4 w-4 opacity-50' />
            <Input
              id='signup-password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Create a password'
              className='pl-10 pr-10'
              required
              {...register('password')}
              error={errors.password?.message}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-3 opacity-50 hover:opacity-100 transition-opacity'
            >
              {showPassword ? (
                <EyeOff className='h-4 w-4' />
              ) : (
                <Eye className='h-4 w-4' />
              )}
            </button>
          </div>
        </div>

        <div className='space-y-1'>
          <Label htmlFor='confirm-password'>Confirm Password</Label>
          <div className='relative'>
            <Lock className='absolute left-3 top-[10px] h-4 w-4 opacity-50' />
            <Input
              id='confirm-password'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Confirm your password'
              className='pl-10 pr-10'
              required
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <button
              type='button'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-3 top-3 opacity-50 hover:opacity-100 transition-opacity'
            >
              {showConfirmPassword ? (
                <EyeOff className='h-4 w-4' />
              ) : (
                <Eye className='h-4 w-4' />
              )}
            </button>
          </div>
        </div>

        {responseError && (
          <p className='text-red-500 text-xs mt-2 text-left'>{responseError}</p>
        )}

        <div className='flex items-start space-x-2'>
          <input
            type='checkbox'
            id='terms'
            className='mt-1 rounded'
            {...register('termsAndConditions')}
          />
          <label htmlFor='terms' className='text-sm leading-relaxed'>
            I agree to the{' '}
            <Link href={Routes.TERMS} className='underline'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href={Routes.PRIVACY_POLICY} className='underline'>
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.termsAndConditions?.message && (
          <p className='text-red-500 text-xs mt-2 text-left'>
            {errors.termsAndConditions?.message}
          </p>
        )}

        <Button
          type='submit'
          className='w-full h-11 font-medium transition-all hover:-translate-y-0.5'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
              Creating account...
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              Create Account
              <ArrowRight className='h-4 w-4' />
            </div>
          )}
        </Button>
      </form>
    </TabsContent>
  );
};

export default SignUp;
