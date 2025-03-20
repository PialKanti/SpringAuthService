import { cn } from '@/lib/shadcn/utils';
import { IKeenCarouselItem } from './interface';

/**
 * Component for rendering a Keen Carousel item.
 */
export function KeenCarouselItem({ children, className }: IKeenCarouselItem) {
  return (
    <div
      className={cn(
        // Required Keen slider class
        'keen-slider__slide',

        // Override default Keen slider styles
        '!overflow-visible',

        // Custom styles for the carousel item
        // Note: Check keen-carousel.module.css before renaming
        'keen-carousel-slide',

        // Additional custom class names
        className
      )}
      aria-label="Keen slider slide"
    >
      {children}
    </div>
  );
}
