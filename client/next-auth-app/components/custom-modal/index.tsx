import { cn } from '@/lib/shadcn/utils';
import { ICustomModal } from './interface';
import { Dialog, DialogContent } from '../ui/dialog';

/**
 * CustomModal Component
 *
 * A custom modal that displays provided content.
 *
 * Before using this component:
 * - Define a state to control the modal visibility.
 * - Create an open and close handler to update the state.
 * - Provide the state value to the `modalOpen` prop.
 *
 * This component accepts two React nodes: one for the trigger
 * and another for the modal content.
 *
 * It can be used asynchronously, allowing for handling
 * loading or delayed closing scenarios.
 * If you need to close the modal with outside click provide the
 * @param closeOnOutSideClick is true
 *
 * @example
 * // Basic Usage:
 * <CustomModal
 *   modalOpen={modalOpen}
 *   onCustomModalChange={setModalOpen}
 *   trigger={<button onClick={() => setModalOpen(true)}>Show Modal</button>}
 *   content={<div>Your modal content goes here.</div>}
 * />
 */
export const CustomModal = ({
  trigger,
  content,
  modalOpen,
  onCustomModalChange,
  contentWrapperClassName,
  closeOnOutSideClick,
}: ICustomModal) => {
  return (
    <Dialog open={modalOpen} onOpenChange={onCustomModalChange}>
      {trigger}
      <DialogContent
        className={cn(
          'space-y-5 rounded border-0 border-none bg-white p-5 shadow-md shadow-gray-400',
          contentWrapperClassName
        )}
        onInteractOutside={(event) => {
          if (!closeOnOutSideClick) {
            event.preventDefault();
          }
        }}
      >
        {content}
      </DialogContent>
    </Dialog>
  );
};
