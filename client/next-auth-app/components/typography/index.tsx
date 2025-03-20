import { cn } from '@/lib/shadcn/utils';
import { ITypography, TypographyDefinitions } from './interface';
import { Slot } from '@radix-ui/react-slot';

/**
 * Typography component for rendering text with various sizes and basic styles.
 *
 * Note: When `asChild` is true, the `tagName` property does not affect the rendered output.
 * The Typography content is rendered as a child using Radix Slot.
 *
 * @param {ITypography} props - The properties for the Typography component.
 * @returns {JSX.Element} - A JSX element representing the rendered Typography.
 */
export function Typography(props: ITypography) {
  const { children, size, asChild, className } = props;

  // Destructure the sizeClasses and tag for cleaner code.
  const { classNames: sizeClasses, tag: defaultTag } =
    TYPOGRAPHY_DEFINITIONS[size];

  // Determine the HTML tag to use based on the provided tagName or the default mapping.
  const Element = asChild ? Slot : props.tagName || defaultTag;

  // Render the Typography component based on the selected size.
  return <Element className={cn(sizeClasses, className)}>{children}</Element>;
}

// Define the CSS classes and HTML tag mappings within the ITypography interface.
const TYPOGRAPHY_DEFINITIONS: TypographyDefinitions = {
  hero: {
    tag: 'h2',
    classNames: cn('text-3xl font-normal tracking-tight lg:text-5xl'),
  },
  h1: {
    tag: 'h2',
    classNames: cn('text-xl font-normal tracking-tight lg:text-4xl'),
  },
  h2: {
    tag: 'h2',
    classNames: cn('text-lg font-normal tracking-tight lg:text-2xl'),
  },
  h3: {
    tag: 'h3',
    classNames: cn('text-md font-normal tracking-tight lg:text-lg'),
  },
  s1: {
    tag: 'h4',
    classNames: cn('font-bold text-base'),
  },
  s2: {
    tag: 'h4',
    classNames: cn('font-bold text-sm'),
  },
  o1: {
    tag: 'span',
    classNames: cn('block text-sm font-bold tracking-wide'),
  },
  c1: {
    tag: 'span',
    classNames: cn('block text-xs'),
  },
  q1: {
    tag: 'p',
    classNames: cn('text-md italic tracking-tight lg:text-lg'),
  },
  p1: {
    tag: 'p',
    classNames: cn('text-base'),
  },
  p2: {
    tag: 'p',
    classNames: cn('text-sm'),
  },
};
