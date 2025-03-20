import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ICustomAccordion } from '../../interface';
import { cn } from '@/lib/shadcn/utils';
import { Typography } from '@/components/typography';
import { IconStore } from '@/components/icon-store';

interface IProps extends Pick<ICustomAccordion, 'accordionItems'> {}

/** The itemPadding variable is a class string that applies
 * equal padding and alignment to the x-axis and y-axis
 * for accordion items and their content.
 */
const accordionItemPadding = cn('px-0 py-4');

export const CustomAccordionInnerContent = ({ accordionItems }: IProps) => {
  return (
    <>
      {accordionItems.map((accordionItem, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-gray-300 bg-transparent transition-colors [&[data-state='open']]:bg-transparent"
        >
          <AccordionTrigger className="w-full no-underline hover:no-underline [&[data-state='open']&_.accordion-icon]:-rotate-180">
            <Typography
              size="p1"
              tagName="span"
              className={cn(
                accordionItemPadding,
                'flex w-full items-center justify-between gap-4 text-left lg:gap-5'
              )}
            >
              {accordionItem.title}
              <IconStore
                iconName="chevron-down"
                className="accordion-icon flex flex-none items-center justify-center self-baseline text-lg/[1] text-[inherit] transition-transform duration-300"
              />
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={cn(accordionItemPadding, 'pt-0 text-sm text-gray-600')}
            >
              {accordionItem.content}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
};
