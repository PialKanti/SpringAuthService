import { cn } from '@/lib/shadcn/utils';
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
  PopoverTrigger,
} from '../ui/popover';
import { ICustomPopover } from './interface';
import { ScrollArea } from '../ui/scroll-area';

/**
 * The CustomPopover component is a versatile UI element that can be customized
 * with any design. It is designed to display content in a popover,
 * triggered by user interaction.
 *
 * For detailed implementation and styling guidance, refer to the Storybook
 * decorators implementation. This provides insights into creating and styling
 * content for the popover, ensuring a cohesive and user-friendly experience.
 *
 * @example
 * // Example usage of the CustomPopover component
 * <CustomPopover
 *   popoverOpen={popoverOpen}
 *   onCustomPopoverChange={setPopoverOpen}
 *   trigger={<button onClick={()=>setPopoverOpen(true)}>Open Popover</button>}
 *   content={<div>Popover Content</div>}
 * />
 */

export const CustomPopover = ({
  popoverOpen,
  onCustomPopoverChange,
  anchor,
  trigger,
  content,
  className,
  contentWrapperClassName,
  scrollAreaViewportClassName,
  scrollBarClassName,
  closeOnOutSideClick,
}: ICustomPopover) => {
  return (
    <Popover open={popoverOpen} onOpenChange={onCustomPopoverChange}>
      {/* Popover anchor */}
      {anchor && <PopoverAnchor asChild>{anchor}</PopoverAnchor>}

      {/* Popover trigger */}
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        /**
         * The width property adjusts the element's width to match the design requirements.
         *
         * For responsiveness below 375px screen, it's recommended to utilize media queries
         * with appropriate values. For example:
         * @example [@media(max-width:375px)]:w-[300px]
         *
         *
         * Currently, the [data-radix-popper-content-wrapper] has a property min-width: max-content;
         * which poses a challenge for responsiveness and may not achieve the desired design
         * when content fills the container.
         * @see https://github.com/radix-ui/primitives/issues/1839
         * Changing the global css file resolves the issue.
         * Adding styles to the PopoverContent component doesn't achieve the result as described.
         *
         *
         * md:[&_.custom-table] is used to control the width of the CustomTable component. So that
         * we can prevent the overflow of the CustomTable contents inside popover.
         */
        className={cn(
          'border-col-4 bg-col-5 m-2 w-[--popover-width] border p-0 [--popover-width:22.438rem] md:[--popover-width:27.688rem] lg:m-3',
          // 'md:[&_.custom-table]:[calc(var(--popover-width)- horizontalPadding of the popover)]
          'md:[&_.custom-table]:[calc(var(--popover-width)-3.5rem)] [&_.custom-table]:max-w-[calc(var(--popover-width)-2.75rem)]',
          className
        )}
        onInteractOutside={(event) => {
          if (!closeOnOutSideClick) {
            event.preventDefault();
          }
        }}
      >
        <ScrollArea
          scrollBarClassName={scrollBarClassName}
          viewportClassName={scrollAreaViewportClassName}
        >
          {/* Popover content */}
          <div className={cn(contentWrapperClassName)}>{content}</div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
