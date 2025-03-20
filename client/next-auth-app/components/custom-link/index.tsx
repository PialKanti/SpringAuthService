import { cn } from '@/lib/shadcn/utils';
import { ICustomLink } from './interface';
import Link from 'next/link';

/**
 * `CustomLink` is a component that wraps Next.js `Link` component
 * to provide additional functionality.
 * It allows for the creation of a link with customizable properties
 * such as the target window, the ability to open in a new tab, disabling
 * the link, prefetching the page, and more.
 */
export function CustomLink({
  label,
  href,
  disabled,
  prefetch = true,
  className,
  ariaLabel,
  target,
}: ICustomLink) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        className,
        (disabled || href === '') && 'pointer-events-none'
      )}
      prefetch={prefetch}
      aria-label={ariaLabel || label}
      aria-disabled={disabled}
    >
      {label}
    </Link>
  );
}
