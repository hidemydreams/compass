'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/shared/components/ui/card';
import { ArrowLeft, XCircle } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import ROUTES from '@/constants/routes';

export default function PaymentCancelledPage() {
  const router = useRouter();

  const handleReturnToDashboard = () => {
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <PaymentCancelled
      onReturnToDashboard={handleReturnToDashboard}
      reason='Payment was cancelled before completion'
    />
  );
}

interface PaymentCancelledProps {
  onReturnToDashboard?: () => void;
  reason?: string;
}

export function PaymentCancelled({
  onReturnToDashboard,
  reason = 'Payment was cancelled by user',
}: PaymentCancelledProps) {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-rose-50'>
      <Card className='w-full max-w-md border-0 shadow-2xl bg-white/80 backdrop-blur-sm'>
        <CardContent className='p-8 text-center'>
          {/* Cancel Icon */}
          <div className='mx-auto mb-6 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center'>
            <XCircle className='w-12 h-12 text-red-600' />
          </div>

          {/* Cancel Message */}
          <div className='space-y-2 mb-6'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Payment Cancelled
            </h1>
            <p className='text-gray-600'>Your payment was not processed</p>
          </div>

          {/* Reason */}
          <div className='bg-gray-50 rounded-lg p-4 mb-8'>
            <p className='text-sm text-gray-700'>{reason}</p>
          </div>

          {/* Return Button */}
          <Button
            onClick={onReturnToDashboard}
            className='w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-all duration-200 hover:shadow-lg'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Return to Dashboard
          </Button>

          {/* Footer Text */}
          <p className='text-xs text-gray-500 mt-6'>
            No charges were made to your account
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
