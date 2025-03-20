import { KeenSliderOptions } from 'keen-slider';
import {
  IKeenCarouselCustomHook,
  KEEN_ITEM_TO_ITEM_GAP,
  KEEN_ITEMS_PER_SLIDE,
} from './interface';
import { SCREENS } from '@/lib/types';

export function generateArrayFromNumber(num: number) {
  return Array(num)
    .fill(0)
    .map((_, i) => i + 1);
}

export function keenCarouselConfig(
  args: Required<IKeenCarouselCustomHook>
): KeenSliderOptions {
  return {
    loop: args.loop,
    defaultAnimation: {
      duration: args.transitionSpeed,
    },
    slides: {
      perView: args.itemsPerSlide.initial || KEEN_ITEMS_PER_SLIDE.initial,
      spacing: args.itemGap.initial ?? KEEN_ITEM_TO_ITEM_GAP.initial,
    },
    breakpoints: {
      [`(min-width: ${SCREENS.sm})`]: {
        slides: {
          perView: args.itemsPerSlide.sm || KEEN_ITEMS_PER_SLIDE.sm,
          spacing: args.itemGap.sm ?? KEEN_ITEM_TO_ITEM_GAP.sm,
        },
      },
      [`(min-width: ${SCREENS.md})`]: {
        slides: {
          perView: args.itemsPerSlide.md || KEEN_ITEMS_PER_SLIDE.md,
          spacing: args.itemGap.md ?? KEEN_ITEM_TO_ITEM_GAP.md,
        },
      },
      [`(min-width: ${SCREENS.lg})`]: {
        slides: {
          perView: args.itemsPerSlide.lg || KEEN_ITEMS_PER_SLIDE.lg,
          spacing: args.itemGap.lg ?? KEEN_ITEM_TO_ITEM_GAP.lg,
        },
      },
      [`(min-width: ${SCREENS.xl})`]: {
        slides: {
          perView: args.itemsPerSlide.xl || KEEN_ITEMS_PER_SLIDE.xl,
          spacing: args.itemGap.xl ?? KEEN_ITEM_TO_ITEM_GAP.xl,
        },
      },
      [`(min-width: ${SCREENS['2xl']})`]: {
        slides: {
          perView: args.itemsPerSlide['2xl'] || KEEN_ITEMS_PER_SLIDE['2xl'],
          spacing: args.itemGap['2xl'] ?? KEEN_ITEM_TO_ITEM_GAP['2xl'],
        },
      },
    },
  };
}
