'use client';

import { IRawCarousel } from './interface';
import styles from './raw-carousel.module.css';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { RawCarouselNavigation } from './sub-components/navigation';
import { cn } from '@/lib/shadcn/utils';
import { rawCarouselNavigateSlide } from './utils';

/**
 * RawCarousel component for displaying a series of items in a sliding format.
 *
 * Props:
 * - children: The items to be displayed in the raw-carousel.
 * - itemPerSlide: Configuration for the number of items per slide at
 * different breakpoints.
 * - itemGap: The gap between items in the raw-carousel.
 * - hasNavigation: Whether to display navigation buttons.
 * - haveOffset: Whether to allow items to overflow the container for
 * a more dynamic look.
 * - navigationWrapperClassName: Custom class for the navigation wrapper.
 * - navigationPrevBtnClassName: Custom class for the previous
 * navigation button.
 * - navigationNextBtnClassName: Custom class for the next navigation button.
 * - mainWrapperClassName: Custom class for the main carousel wrapper.
 * - wrapperClassName: Custom class for the carousel wrapper.
 *
 * @example
 * <RawCarousel {...carouselProps}>
 *  {rawCarouselCardProps &&
 *    rawCarouselCardProps.length > 0 &&
 *    rawCarouselCardProps.map((card, index) => (
 *    <RawCarouselItem key={index}>
 *      <Card {...card} />
 *    </RawCarouselItem>
 *  ))}
 * </Carousel>
 */
export function RawCarousel({
  children,
  itemPerSlide,
  itemGap,
  hasNavigation,
  haveOffset,
  navigationWrapperClassName,
  navigationPrevBtnClassName,
  navigationNextBtnClassName,
  mainWrapperClassName,
  wrapperClassName,
}: IRawCarousel) {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const rawCarouselRef = useRef<null | HTMLDivElement>(null);

  /**
   * UseEffect hook to dynamically calculate and set the width
   * of the carousel wrapper and the scrollbar width based on
   * the current viewport size.
   */
  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.clientWidth);
    }
    if (window && document) {
      setScrollBarWidth(window.innerWidth - document.body.clientWidth);
    }
  }, [wrapperRef]);

  // Slide per view
  const slidesPerView = {
    '--initial-view': itemPerSlide?.initial,
    '--sm-view': itemPerSlide?.sm,
    '--md-view': itemPerSlide?.md,
    '--lg-view': itemPerSlide?.lg,
    '--xl-view': itemPerSlide?.xl,
    '--2xl-view': itemPerSlide?.['2xl'],
  } as CSSProperties;

  // Item gap
  const gapPerItem = {
    '--initial-gap': `${itemGap?.initial}px`,
    '--sm-gap': `${itemGap?.sm}px`,
    '--md-gap': `${itemGap?.md}px`,
    '--lg-gap': `${itemGap?.lg}px`,
    '--xl-gap': `${itemGap?.xl}px`,
    '--2xl-gap': `${itemGap?.['2xl']}px`,
  } as CSSProperties;

  return (
    <div className={cn('relative', mainWrapperClassName)} ref={wrapperRef}>
      {hasNavigation && (
        <div
          className={cn(
            // layout
            'flex items-center justify-end gap-3 md:gap-10',
            // transition
            'transition-all duration-500 ease-in-out',
            // font
            'text-base md:text-2xl',
            // wrapper class
            navigationWrapperClassName
          )}
        >
          <RawCarouselNavigation
            iconName="chevron-left"
            onClick={() => rawCarouselNavigateSlide('prev', rawCarouselRef)}
            className={navigationPrevBtnClassName}
          />
          <RawCarouselNavigation
            iconName="chevron-right"
            onClick={() => rawCarouselNavigateSlide('next', rawCarouselRef)}
            className={navigationNextBtnClassName}
          />
        </div>
      )}
      <div
        className={cn(styles['raw-carousel-wrapper'], 'flex', wrapperClassName)}
        style={
          {
            ...slidesPerView,
            ...gapPerItem,
            '--scrollbar-width': `${scrollBarWidth}px`,
            '--container-side-gap': `calc((100vw - var(--scrollbar-width) - ${wrapperWidth}px) / 2)`,
          } as CSSProperties
        }
      >
        <div
          ref={rawCarouselRef}
          className={cn(
            // layout
            'relative mt-10 flex snap-none items-start overflow-y-hidden overflow-x-scroll scroll-smooth',
            // when offset is true , items will be flow over container
            haveOffset &&
              '-ml-[--container-side-gap] -mr-[--container-side-gap] w-[calc(100vw-var(--scrollbar-width))] pl-[--container-side-gap] pr-[--container-side-gap]',
            // common
            styles['raw-carousel']
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
