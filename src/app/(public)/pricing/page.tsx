'use client';

import PricingCard from '@/shared/components/PricingCard';
import Typography from '@/shared/components/Typography';
import { basicFeatures, creatorFeatures } from '@/constants/plans';
import { redirect } from 'next/navigation';
import Routes from '@/constants/routes';
import { Button } from '@/shared/components/ui/button';
import { useCheckout } from '@/shared/hooks/use-checkout';

const Pricing = () => {
  const { startCheckout } = useCheckout(null);

  const onChoosePlanClick = async () => {
    await startCheckout();
  };

  const onStartBuildingClick = () => {
    redirect(Routes.DASHBOARD_DESIGN);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full gap-8 py-16 container mx-auto px-4'>
      <div className='text-center flex flex-col gap-8'>
        <Typography className='max-w-[500px]' variant='h1'>
          Choose the plan that’s perfect for your needs
        </Typography>
        <Typography className='max-w-[500px]' variant='p'>
          Pick a plan that fits your needs. Start for free, upgrade anytime for
          more customization, features, and premium templates.
        </Typography>
      </div>
      <div className='mt-12 grid justify-self-center gap-8 md:grid-cols-2 md:gap-6 lg:mx-auto lg:max-w-4xl text-left'>
        <PricingCard type='basic' features={basicFeatures}>
          <Button variant='secondary' onClick={onStartBuildingClick}>
            Start building
          </Button>
        </PricingCard>
        <PricingCard type='creator' features={creatorFeatures}>
          <Button
            className='btn-grad btn-grad-hover'
            onClick={onChoosePlanClick}
          >
            Choose plan
          </Button>
        </PricingCard>
      </div>
    </div>
  );
};

export default Pricing;
