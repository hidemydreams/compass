import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/shared/components/ui/dialog';
import { Button } from '@/shared/components/ui/button';
import capitalize from '@/shared/utils/capitalize';

interface CreatorFeaturesPopupProps {
  open: boolean;
  onClose: () => void;
  action: unknown;
  onPositive: () => void;
}

function ConfirmationPopup({
  open,
  onClose,
  action,
  onPositive,
}: CreatorFeaturesPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <div className='flex items-center gap-2'>
            <DialogTitle>{capitalize(action as string)} section</DialogTitle>
          </div>
          <DialogDescription className='text-left'>
            You are about to {action as string} your section. Are you sure you want to do
            this?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='mt-6'>
          <Button
            variant='outline'
            onClick={onClose}
            className='w-full sm:w-auto'
          >
            Cancel
          </Button>
          <Button onClick={onPositive} className='w-full sm:w-auto'>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmationPopup;
