import { ReactNode } from 'react';

export interface ICustomModal {
  /** The element that triggers the modal. */
  trigger: ReactNode;
  /** The content to be displayed within the modal. */
  content: ReactNode;
  /** Determines whether the modal is currently visible.*/
  modalOpen: boolean;
  /**
   * Callback function that updates the visibility state of the modal.
   * @param open - The new open state for the modal.
   */
  onCustomModalChange: (open: boolean) => void;
  /** Define CSS class names for content wrapper element. */
  contentWrapperClassName?: string;
  /** Determines whether the modal is close with outside click.*/
  closeOnOutSideClick?: boolean;
}
