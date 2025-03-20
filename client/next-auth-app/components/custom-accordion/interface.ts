export interface ICustomAccordionItem {
  /** A unique value for the item.  */
  value: string;
  /** Title for the item  */
  title: string;
  /** Contains the collapsible content for an item.  */
  content: string;
}

interface ICommonProps {
  /** Array of objects used to render each items */
  accordionItems: Omit<ICustomAccordionItem, 'value'>[];
}

interface ISingleTypeAccordionProps extends ICommonProps {
  /** Determines  one or multiple items can be opened at the same time. */
  type: 'single';
  /** This controls whether an expanded item can be collapsed. */
  collapsible?: boolean;
}
interface IMultipleTypeAccordionProps extends ICommonProps {
  type: 'multiple';
}

export type ICustomAccordion =
  | ISingleTypeAccordionProps
  | IMultipleTypeAccordionProps;
