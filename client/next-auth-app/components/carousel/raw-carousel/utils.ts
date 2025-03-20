import { MutableRefObject } from 'react';

// Calculate the total width of a slide, including the gap
const calculateTotalSlideWidth = (
  rawCarouselRef: MutableRefObject<HTMLDivElement | null>
): number => {
  const rawCarouselElement = rawCarouselRef.current;
  // Return if the carousel element is not available
  if (!rawCarouselElement) return 0;

  const firstSlideElement = rawCarouselElement.firstElementChild;
  // Return if there's no first slide element
  if (!firstSlideElement) return 0;

  const slideWidth = firstSlideElement.clientWidth;
  const gapValue = window
    ?.getComputedStyle(rawCarouselElement)
    .getPropertyValue('--raw-carousel-gap');
  const gapPixels = parseInt(gapValue, 10);

  return slideWidth + gapPixels;
};

/**
 * Function to navigate to the next or previous slide based on
 * the direction parameter
 */
export const rawCarouselNavigateSlide = (
  direction: 'next' | 'prev',
  rawCarouselRef: MutableRefObject<HTMLDivElement | null>
) => {
  if (!rawCarouselRef.current) return;
  const slideWidth = calculateTotalSlideWidth(rawCarouselRef);
  // Determine the scroll direction based on the direction parameter
  const scrollAmount = direction === 'next' ? slideWidth : -slideWidth;
  // Update the scroll position of the carousel
  rawCarouselRef.current.scrollLeft += scrollAmount;
};
