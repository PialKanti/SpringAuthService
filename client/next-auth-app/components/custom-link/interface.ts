import { AnchorHTMLAttributes } from 'react';

export interface ICustomLink {
  /** Link title */
  label: string;
  /** The path or URL to navigate to. */
  href: string;
  /** When present, it specifies that the element should be disabled. */
  disabled: boolean;
  /** Define CSS class names for HTML elements. */
  className?: string;
  /** This controls NextJS prefetch feature. Default `true` */
  prefetch?: boolean;
  /** This control specifies where to open the linked document */
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  /** Define aria-label for HTML anchor element. */
  ariaLabel?: string;
}
