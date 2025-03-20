'use client';

import { cn } from '@/lib/shadcn/utils';
import { IKeenCarouselNavigationButton } from './interface';
import { IconStore } from '@/components/icon-store';

export function KeenCarouselNavigationButton({
  onClick,
  disabled,
  iconName,
  className,
}: IKeenCarouselNavigationButton) {
  const wrapperClasses = cn(
    // Typo
    'text-[1.25rem] text-black',
    // Layout
    'absolute top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full',
    // Animation
    'transition-all duration-300',
    // Border
    'border border-solid border-gray-300',

    // Conditional styling
    iconName === 'chevron-left' && 'left-4',
    iconName === 'chevron-right' && 'right-4',
    disabled && 'cursor-not-allowed',

    className
  );

  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      aria-label={iconName === 'chevron-left' ? 'Previous slide' : 'Next slide'}
      className={wrapperClasses}
    >
      <IconStore iconName={iconName} />
    </button>
  );
}
