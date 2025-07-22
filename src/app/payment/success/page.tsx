'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/shared/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import ROUTES from '@/constants/routes';

export default function PaymentSuccessPage() {
  const router = useRouter();

  const handleReturnToDashboard = () => {
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <PaymentSuccess
      onReturnToDashboard={handleReturnToDashboard}
      amount='$3.00'
      transactionId='txn_1234567890abcdef'
    />
  );
}

interface PaymentSuccessProps {
  onReturnToDashboard?: () => void;
  amount?: string;
  transactionId?: string;
}

export function PaymentSuccess({
  onReturnToDashboard,
  amount = '$3.00',
}: PaymentSuccessProps) {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-emerald-50'>
      <Card className='w-full max-w-md border-0 shadow-2xl bg-white/80 backdrop-blur-sm'>
        <CardContent className='p-8 text-center'>
          {/* Success Icon */}
          <div className='mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
            <CheckCircle className='w-12 h-12 text-green-600' />
          </div>

          {/* Success Message */}
          <div className='space-y-2 mb-6'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Payment Successful!
            </h1>
            <p className='text-gray-600'>
              Your payment has been processed successfully
            </p>
          </div>

          {/* Payment Details */}
          <div className='bg-gray-50 rounded-lg p-4 mb-8 space-y-2'>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-600'>Amount</span>
              <span className='font-semibold text-gray-900'>{amount}</span>
            </div>
            {/*<div className='flex justify-between items-center'>*/}
            {/*  <span className='text-sm text-gray-600'>Transaction ID</span>*/}
            {/*  <span className='font-mono text-xs text-gray-700'>*/}
            {/*    {transactionId}*/}
            {/*  </span>*/}
            {/*</div>*/}
          </div>

          {/* Return Button */}
          <Button
            onClick={onReturnToDashboard}
            className='w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-200 hover:shadow-lg'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Return to Dashboard
          </Button>

          {/* Footer Text */}
          <p className='text-xs text-gray-500 mt-6'>
            A receipt has been sent to your email address
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
