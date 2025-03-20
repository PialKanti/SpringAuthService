import { cn } from '@/lib/shadcn/utils';
import styles from '../../raw-carousel.module.css';
import { IRawCarouselItem } from './interface';

export function RawCarouselItem({ children, className }: IRawCarouselItem) {
  return (
    <div
      className={cn(
        // layout
        'slide relative flex h-full w-full snap-center flex-col gap-4 px-1 md:px-0',
        // font
        'leading-[100%]',
        // common
        styles['raw-carousel-item'],
        // optional class Name
        className
      )}
    >
      {children}
    </div>
  );
}
