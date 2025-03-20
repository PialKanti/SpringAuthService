import { IKeenCarousel } from '../../interface';

export interface ICarouselProgressBar
  extends Pick<
    IKeenCarousel,
    'progressWrapperClassName' | 'progressCompleteBarClassName'
  > {
  progress: number;
}
