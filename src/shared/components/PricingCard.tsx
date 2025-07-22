import Typography from '@/shared/components/Typography';
import { Check } from 'lucide-react';

interface IProps {
  type: 'basic' | 'creator';
  features: string[];
  children?: React.ReactNode;
}

const PricingCard = ({ type, features, children }: IProps) => {
  const isBasic = type === 'basic';
  const name = isBasic ? 'Basic' : 'Creator';
  const price = isBasic ? '0' : '3';
  const bgColor = isBasic ? 'bg-white' : 'border-amber-200 bg-amber-50';
  const textColor = isBasic ? 'text-black' : 'text-black';

  return (
    <div
      className={`max-w-[400px] min-h-[700px] p-6 rounded-2xl shadow-md flex flex-col gap-10 justify-between items-start ${bgColor} ${textColor}`}
    >
      <div>
        <Typography className='mb-2' variant='h5'>
          {name}
        </Typography>

        <div className={`mb-4 ${isBasic ? 'text-gray-700' : 'text-black'}`}>
          <span
            className={`text-[40px] font-bold ${isBasic ? 'text-black' : 'text-black'}`}
          >
            ${price}
          </span>
          /Per Month
        </div>

        <Typography
          className={`mb-8 ${isBasic ? 'text-gray-700' : 'text-black'}`}
          variant='p'
        >
          Upgrade your social portfolio with a stunning profile & enhanced
          shots.
        </Typography>

        <ul className='flex flex-col gap-4'>
          {features.map((feature, i) => {
            return <FeatureItem isBasic={isBasic} feature={feature} key={i} />;
          })}
        </ul>
      </div>
      {children}
    </div>
  );
};

interface IFeatureProps {
  isBasic: boolean;
  feature: string;
}

const FeatureItem = ({ isBasic, feature }: IFeatureProps) => {
  return (
    <li className='flex gap-2 items-center'>
      <div
        className={`bg-blue-100 p-[3px] rounded-2xl ${isBasic ? 'bg-gray-200' : 'bg-transparent'}`}
      >
        <Check
          className={`${isBasic ? 'text-black' : 'text-black'}`}
          size={12}
        />
      </div>
      <Typography
        variant='p'
        className={`text-sm ${isBasic ? 'text-gray-700' : 'text-black'}`}
      >
        {feature}
      </Typography>
    </li>
  );
};

export default PricingCard;
