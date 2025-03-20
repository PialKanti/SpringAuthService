import { IKeenCarousel } from './interface';

export const keenCarouselOptions: Omit<
  IKeenCarousel,
  'children' | 'sliderRef' | 'instanceRef'
> = {
  haveOffset: true,
  hasNavigation: false,
  hasPagination: false,
  hasProgress: false,
  currentSlide: 0,
  sliderReady: false,
};
