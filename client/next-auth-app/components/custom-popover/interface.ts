import { ReactNode } from 'react';

export interface ICustomPopover {
  /** Controls the open state of the popover. */
  popoverOpen: boolean;
  /** Callback function to handle the open state change. */
  onCustomPopoverChange: (open: boolean) => void;
  /** The React node that triggers the popover to open. */
  trigger: ReactNode;
  /** The content displayed inside the popover. */
  content: ReactNode;
  /** An optional element to position the Popover.Content against */
  anchor?: ReactNode;
  /** Custom CSS class name for the sheet content main wrapper. */
  className?: string;
  /** Custom CSS class name for the content wrapper. */
  contentWrapperClassName?: string;
  /** Custom CSS class name for the scrollbar. */
  scrollBarClassName?: string;
  /** Custom CSS class name for the scroll area viewport. */
  scrollAreaViewportClassName?: string;
  /** Determines whether the popover is close with outside click.*/
  closeOnOutSideClick?: boolean;
}
