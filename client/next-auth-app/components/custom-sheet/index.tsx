import { Sheet, SheetContent } from '../ui/sheet';

import { ScrollArea } from '../ui/scroll-area';
import { cn } from '@/lib/shadcn/utils';
import { ICustomSheet } from './interface';

/**
 * The CustomSheet component is a versatile UI element that can be customized
 * with any design. It is designed to display content in a sheet format,
 * triggered by user interaction.
 *
 * For detailed implementation and styling guidance, refer to the Storybook
 * decorators implementation. This provides insights into creating and styling
 * content for the sheet, ensuring a cohesive and user-friendly experience.
 *
 * @example
 * Example usage of the Drawer component
 * <Drawer
 *   sheetOpen={sheetOpen}
 *   onCustomSheetChange={setSheetOpen}
 *   trigger={<button onClick={()=>setSheetOpen(true)}>Open Drawer</button>}
 *   content={<div>Drawer Content</div>}
 * />
 */

export const CustomSheet = ({
  sheetOpen,
  onCustomSheetChange,
  trigger,
  content,
  side = 'right',
  className,
  scrollBarClassName,
  contentWrapperClassName,
  scrollAreaViewportClassName,
}: ICustomSheet) => {
  const sheetContentClasses = cn(
    'bg-white p-0',
    {
      'w-full max-w-[20rem] md:max-w-[26.25rem]':
        side == 'left' || side == 'right',
      'w-full': side == 'top' || side == 'bottom',
    },
    className
  );

  const scrollAreaClasses = cn('[&>div>div]:!block', {
    'h-[100vh] max-md:h-[100dvh]': side == 'left' || side == 'right',
    'h-[80vh] max-md:h-[70dvh]': side == 'top' || side == 'bottom',
  });

  return (
    <Sheet open={sheetOpen} onOpenChange={onCustomSheetChange}>
      {trigger}
      <SheetContent className={sheetContentClasses} side={side}>
        <ScrollArea
          className={scrollAreaClasses}
          scrollBarClassName={scrollBarClassName}
          viewportClassName={scrollAreaViewportClassName}
        >
          {/* Drawer Content */}
          <div className={cn(contentWrapperClassName)}>{content}</div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
