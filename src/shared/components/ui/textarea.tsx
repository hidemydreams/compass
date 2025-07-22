import * as React from 'react';

import { cn } from '@/lib/utils';

interface IProps extends React.ComponentProps<'textarea'> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, IProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div>
        <textarea
          className={cn(
            'flex min-h-[60px] resize-none w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
