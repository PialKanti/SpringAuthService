'use client';

import 'keen-slider/keen-slider.min.css';
import { CSSProperties } from 'react';
import {
  IKeenCarousel,
  KEEN_ITEM_TO_ITEM_GAP,
  KEEN_ITEMS_PER_SLIDE,
} from './interface';
import { KeenCarouselPagination } from './sub-components/pagination';
import { KeenCarouselProgressBar } from './sub-components/progress';
import { KeenCarouselNavigationButton } from './sub-components/navigation';
import { cn } from '@/lib/shadcn/utils';
import styles from './keen-carousel.module.css';

/**
 * Keen Carousel
 * Please use with `useCustomKeenSlider` custom hook.
 *
 * Please note: If you pass a custom `itemGap` and `itemPerSlide` it will overwrite the default values then
 * you also have to pass it to this component
 *
 * TODO: Review CSS module.
 * TODO: Document how this component works and how to update it
 */
export function KeenCarousel({
  children,
  itemGap = KEEN_ITEM_TO_ITEM_GAP,
  itemsPerSlide = KEEN_ITEMS_PER_SLIDE,

  haveOffset = false,
  hasNavigation = false,
  hasPagination = false,
  hasProgress = false,

  // Overwriting styling
  mainWrapperClassName,

  navigationWrapperClassName,
  navigationNextBtnClassName,
  navigationPrevBtnClassName,

  paginationWrapperClassName,
  paginationBulletClassName,
  paginationBulletActiveClassName,

  progressWrapperClassName,
  progressCompleteBarClassName,

  // Carousel Config
  sliderRef,
  instanceRef,
  currentSlide,
  sliderReady,
}: IKeenCarousel) {
  // Pagination, Progress, SlidePerView
  let progress: number = 0;
  let paginationDots: number = 0;
  let slidePerView: number = 0;

  if (
    instanceRef.current &&
    instanceRef.current?.options.slides &&
    typeof instanceRef.current.options.slides === 'object' &&
    typeof instanceRef.current?.options.slides.perView === 'number'
  ) {
    slidePerView = Math.floor(instanceRef.current?.options.slides.perView);
    if (instanceRef.current?.options.loop) {
      progress = (currentSlide + 1) / instanceRef.current?.slides.length;
      paginationDots = instanceRef.current?.slides.length;
    } else {
      progress =
        (currentSlide + instanceRef.current?.options.slides.perView) /
        instanceRef.current?.slides.length;
      paginationDots = Math.ceil(
        instanceRef.current?.slides.length -
          instanceRef.current?.options.slides.perView +
          1
      );
    }
  }

  // Perview
  const slidesPerView = {
    '--initial-view': itemsPerSlide.initial,
    '--sm-view': itemsPerSlide.sm,
    '--md-view': itemsPerSlide.md,
    '--lg-view': itemsPerSlide.lg,
    '--xl-view': itemsPerSlide.xl,
    '--2xl-view': itemsPerSlide['2xl'],
  } as CSSProperties;

  // Item gap
  const gapPerItem = {
    '--initial-gap': `${itemGap.initial}px`,
    '--sm-gap': `${itemGap.sm}px`,
    '--md-gap': `${itemGap.md}px`,
    '--lg-gap': `${itemGap.lg}px`,
    '--xl-gap': `${itemGap.xl}px`,
    '--2xl-gap': `${itemGap['2xl']}px`,
  } as CSSProperties;

  return (
    <div className="relative">
      <div className="group relative flex flex-col">
        {/* Main carousel  */}
        <div
          ref={sliderRef}
          style={{ ...slidesPerView, ...gapPerItem }}
          className={cn(
            'keen-slider',
            styles['keen-carousel'],
            haveOffset && '!overflow-visible',
            mainWrapperClassName
          )}
          aria-label="Keen slider"
        >
          {children}
        </div>

        {/* Navigation  */}
        {hasNavigation && sliderReady && instanceRef.current && (
          <div
            className={cn(navigationWrapperClassName)}
            aria-label="Keen slider navigation"
          >
            <KeenCarouselNavigationButton
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={
                !instanceRef.current?.options.loop && currentSlide === 0
              }
              className={navigationPrevBtnClassName}
              iconName="chevron-left"
            />

            <KeenCarouselNavigationButton
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                !instanceRef.current?.options.loop &&
                (currentSlide ===
                  instanceRef.current.track.details.slides.length -
                    slidePerView ||
                  instanceRef.current.track.details.slides.length <
                    slidePerView)
              }
              className={navigationNextBtnClassName}
              iconName="chevron-right"
            />
          </div>
        )}

        {/* Pagination */}
        {hasPagination && sliderReady && instanceRef.current && (
          <KeenCarouselPagination
            totalCount={paginationDots}
            onClick={(newIndex: number) => {
              instanceRef.current?.moveToIdx(newIndex);
            }}
            currentSlide={currentSlide}
            paginationWrapperClassName={paginationWrapperClassName}
            paginationBulletClassName={paginationBulletClassName}
            paginationBulletActiveClassName={paginationBulletActiveClassName}
          />
        )}
      </div>

      {/* ProgressBar  */}
      {hasProgress && (
        <KeenCarouselProgressBar
          progress={progress}
          progressWrapperClassName={progressWrapperClassName}
          progressCompleteBarClassName={progressCompleteBarClassName}
        />
      )}
    </div>
  );
}
