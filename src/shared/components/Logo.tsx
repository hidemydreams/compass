import { cn } from '@/lib/utils';

const Logo = ({ className }: { onClick?: () => void, className?: string }) => {
  return (
    <div className={cn('flex items-center space-x-2 justify-center cursor-pointer', className)}>
      <div className="-rotate-45">
        <svg width="24" height="24" viewBox="0 0 183 183" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M176.522 84.0039L12.0786 3.39744C5.82296 0.331587 -0.952461 6.51481 1.53111 13.024L30.2101 88.2182C30.882 89.9779 30.8828 91.9215 30.2123 93.6817L1.59223 168.9C-0.884232 175.412 5.89603 181.589 12.1473 178.519L176.528 97.7833C182.254 94.9724 182.251 86.8102 176.522 84.0039Z"
            fill="#9333E9" />
        </svg>
      </div>
      <span className='text-xl font-bold text-gray-900 mt-1'>jobmule</span>
    </div>
  );
};

export default Logo;
