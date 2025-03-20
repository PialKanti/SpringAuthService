import { cn } from '@/lib/shadcn/utils';
import { ICustomAccordion } from './interface';
import { CustomAccordionInnerContent } from './sub-components/inner-content';
import { Accordion } from '@/components/ui/accordion';

const wrapperClasses = cn('border-t border-gray-300');

/**
 * The accordion component delivers large amounts
 * of content in a small space through progressive disclosure.
 */

export function CustomAccordion(props: ICustomAccordion) {
  const { accordionItems, type } = props;

  if (type === 'single') {
    const { collapsible = true } = props;
    return (
      <Accordion
        className={wrapperClasses}
        type="single"
        collapsible={collapsible}
      >
        <CustomAccordionInnerContent accordionItems={accordionItems} />
      </Accordion>
    );
  }

  return (
    <Accordion className={wrapperClasses} type="multiple">
      <CustomAccordionInnerContent accordionItems={accordionItems} />
    </Accordion>
  );
}
