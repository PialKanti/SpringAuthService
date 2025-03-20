'use client';

import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { KEEN_ITEM_TO_ITEM_GAP, KEEN_ITEMS_PER_SLIDE } from '../interface';
import { keenCarouselConfig } from '../utils';

/**
 * Custom keen slider hook for returning props that needed to be passed from parent .
 *
 * @returns currentSlide, sliderReady, sliderRef, instanceRef.
 */

export function useCustomKeenSlider({
  /**
   * These are the default values
   *
   * If any value passed from the parent,
   * It will overwrite these values.
   */
  transitionSpeed = 1000,
  itemsPerSlide = KEEN_ITEMS_PER_SLIDE,
  itemGap = KEEN_ITEM_TO_ITEM_GAP,
  loop = false,
  plugins = [] as KeenSliderPlugin[],
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderReady, setSliderReady] = useState<boolean>(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      ...keenCarouselConfig({
        transitionSpeed: transitionSpeed,
        itemsPerSlide: itemsPerSlide,
        itemGap: itemGap,
        loop: loop,
      }),
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setSliderReady(true);
      },
    },
    plugins
  );

  return { currentSlide, sliderReady, sliderRef, instanceRef };
}
