import { SCREENS } from '@/lib/types';

export interface Breakpoints extends Record<keyof typeof SCREENS, number> {
  initial: number;
}

export interface IRawCarousel {
  /** The content inside the raw-carousel. */
  children: React.ReactNode;
  /** This controls whether the navigation control will render */
  hasNavigation?: boolean;
  /** This controls the items shown each slide by device width */
  itemPerSlide?: Breakpoints;
  /** This controls the space between each slide by device width */
  itemGap?: Breakpoints;
  /**
   * This controls the offset of the raw-carousel
   * Good to know: When using haveOffest as true, ensure that
   * your section has the overflow: hidden property.
   */
  haveOffset?: boolean;

  /** Props for overwriting styling (e.g: wrapper, navigation). */

  // main wrapper
  mainWrapperClassName?: string;

  // carousel wrapper
  wrapperClassName?: string;
  // Navigation
  navigationWrapperClassName?: string;
  navigationPrevBtnClassName?: string;
  navigationNextBtnClassName?: string;
}

export const ITEM_GAP: Breakpoints = {
  initial: 12,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 24,
};

export const ITEMS_PER_SLIDE: Breakpoints = {
  initial: 1.2,
  sm: 1.2,
  md: 2.2,
  lg: 3.2,
  xl: 3.5,
  '2xl': 4.4,
};
