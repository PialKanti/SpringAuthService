import { IRawCarousel } from '../../interface';

export interface IRawCarouselItem extends Pick<IRawCarousel, 'children'> {
  /** Custom CSS class name . */
  className?: string;
}
