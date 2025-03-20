import { Breakpoints } from '@/lib/types';
import { KeenSliderInstance, KeenSliderHooks } from 'keen-slider';
import { MutableRefObject } from 'react';

export interface IKeenCarousel {
  /** The content inside the carousel. */
  children: React.ReactNode;
  /** This controls the space between each slide by device width */
  itemGap?: Breakpoints;
  /** This controls the items shown each slide by device width */
  itemsPerSlide?: Breakpoints;
  /**
   * This controls the offset of the carousel
   * Good to know: When using haveOffest as true, ensure that
   * your section has the overflow: hidden property.
   */
  haveOffset?: boolean;
  /** This controls whether the navigation control will render */
  hasNavigation?: boolean;
  /** This controls whether the dots control will render */
  hasPagination?: boolean;

  /** This controls whether the progress control will render */
  hasProgress?: boolean;

  /** Props for overwriting styling (e.g: wrapper, navigation, pagination, progress). */
  // main wrapper
  mainWrapperClassName?: string;

  // Navigation
  navigationWrapperClassName?: string;
  navigationPrevBtnClassName?: string;
  navigationNextBtnClassName?: string;

  // Pagination
  paginationWrapperClassName?: string;
  paginationBulletClassName?: string;
  paginationBulletActiveClassName?: string;

  // Progress
  progressWrapperClassName?: string;
  progressCompleteBarClassName?: string;

  // Carousel Config
  sliderRef: (node: HTMLDivElement | null) => void;
  instanceRef: MutableRefObject<KeenSliderInstance<
    NonNullable<unknown>,
    NonNullable<unknown>,
    KeenSliderHooks
  > | null>;
  currentSlide: number;
  sliderReady: boolean;
}

export interface IKeenCarouselCustomHook {
  /** The transitionSpeed of the slide transition. */
  transitionSpeed?: number;
  /** This controls whether the carousel will loop its content */
  loop?: boolean;
  /** This controls the space between each slide by device width */
  itemGap?: Breakpoints;
  /** This controls the items shown each slide by device width */
  itemsPerSlide?: Breakpoints;
}

export const KEEN_ITEM_TO_ITEM_GAP: Breakpoints = {
  initial: 10,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 24,
};

export const KEEN_ITEMS_PER_SLIDE: Breakpoints = {
  initial: 1.2,
  sm: 1.5,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 5,
};
