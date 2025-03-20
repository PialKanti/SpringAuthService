import { HeadingSize, ParagraphSize } from '../typography/interface';
import { ICustomLink } from '../custom-link/interface';
import { VariantProps } from 'class-variance-authority';
import { textComponentVariants } from './variants-style';

export type TextComponentVariantProps = VariantProps<
  typeof textComponentVariants
>;

/**
 * Control the horizontal alignment of all elements.
 */
export type TextComponentAlignment = NonNullable<
  TextComponentVariantProps['alignment']
>;

export interface ITextComponent extends TextComponentVariantProps {
  /** Overline text*/
  overline?: string;
  /** Title text*/
  title: string;
  /** Size of the title text */
  titleSize: HeadingSize;
  /**
   * HTML tag name to be used for the title.
   * Only 'h1' to 'h6' are allowed.
   */
  titleTagName?: Extract<
    keyof JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >;
  /** Description text*/
  description?: string;
  /** Size of the description text */
  descriptionSize?: ParagraphSize;
  /** Array of objects used to render each link button */
  buttons?: ICustomLink[];
  /**
   * Control the horizontal alignment of all elements.
   * Default: `start`
   */
  alignment?: TextComponentAlignment;
  /**
   * Whether to add bottom spacing
   * Note: This is not configurable from the backend.
   * */
  hasBottomSpacing?: boolean;
  /** Optional custom CSS classes to further style or modify the component. */
  className?: string;
}
