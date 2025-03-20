import { cn } from '@/lib/shadcn/utils';
import { IRawCarouselNavigation } from './interface';
import { IconStore } from '@/components/icon-store';

export function RawCarouselNavigation({
  iconName,
  onClick,
  className,
}: IRawCarouselNavigation) {
  return (
    <button
      className={cn(
        // layout
        'flex h-8 w-8 items-center justify-center',
        // border
        'rounded-full border border-transparent',
        // hover
        'cursor-pointer transition-all duration-500 ease-in-out hover:border-gray-500',
        // icon wrapper classes
        className
      )}
      onClick={onClick}
    >
      <IconStore iconName={iconName} />
    </button>
  );
}
