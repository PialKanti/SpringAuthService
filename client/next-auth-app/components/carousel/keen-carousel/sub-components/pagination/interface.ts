import { IKeenCarousel } from '../../interface';

export interface IKeenCarouselPagination
  extends Pick<
    IKeenCarousel,
    | 'paginationWrapperClassName'
    | 'paginationBulletClassName'
    | 'paginationBulletActiveClassName'
  > {
  totalCount: number;
  onClick: (newIndex: number) => void;
  currentSlide: number;
}
