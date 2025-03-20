// Define the possible heading, paragraph, and other sizes.
const headingSizes = ['hero', 'h1', 'h2', 'h3'] as const;
const paragraphSizes = ['p1', 'p2'] as const;
const otherSizes = ['s1', 's2', 'o1', 'c1', 'q1'] as const;

// Create type aliases for each size category.
export type HeadingSize = (typeof headingSizes)[number];
export type ParagraphSize = (typeof paragraphSizes)[number];
type OtherSize = (typeof otherSizes)[number];

// Create a union type for all possible sizes.
type Size = HeadingSize | ParagraphSize | OtherSize;

// Define common properties for typography elements.
interface ITypographyCommon {
  /** The size of the typography. */
  size: Size;
  /**
   * The content can be simple text, an element (e.g., link element), or other React nodes.
   * To keep things flexible, we specify this as a ReactNode instead of a simple string.
   */
  children: React.ReactNode;
  /** Additional CSS classes to apply to the typography element. */
  className?: string;
}

// Interface for typography elements that are not rendered as a child.
interface ITypographyWithoutAsChild extends ITypographyCommon {
  /** The HTML tag to use for rendering the typography element. */
  tagName?: keyof JSX.IntrinsicElements;
  /** Indicates whether this component should be rendered as a child using Radix Slot. */
  asChild?: false;
}

// Interface for typography elements that are rendered as a child.
interface ITypographyWithAsChild extends ITypographyCommon {
  asChild: true;
}

// Union type combining both types of typography elements.
export type ITypography = ITypographyWithoutAsChild | ITypographyWithAsChild;

// Define Typography Definitions object type.
export type TypographyDefinitions = Record<
  ITypography['size'],
  { classNames: string; tag: keyof JSX.IntrinsicElements }
>;
