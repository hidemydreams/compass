import { Loader2 } from 'lucide-react';
import { Button, ButtonProps } from '@/shared/components/ui/button';

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean; // Optional loading prop
}

const catchyPhrases: string[] = [
  "You're getting there...",
  'Almost finished...',
  'Just a bit more...',
  "You're so close!",
  'Hang tight...',
  'Almost there...',
  'Stay tuned...',
  'Keep going...',
  'One step away...',
  'Just a moment...',
];

// Randomly pick one phrase from the array

function ButtonLoading({ isLoading, ...rest }: LoadingButtonProps) {
  const randomPhrase =
    catchyPhrases[Math.floor(Math.random() * catchyPhrases.length)];

  return (
    <Button {...rest}>
      {isLoading && <Loader2 className='animate-spin' />}
      {isLoading ? randomPhrase : rest.children}
    </Button>
  );
}

export default ButtonLoading;
