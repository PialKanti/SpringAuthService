import { IKeenSliderInstance } from '../common/interface';

/**
 * AutoPlay Plugin for Keen Carousel
 * @param interval (milliseconds)
 * @param pauseOnHover (boolean)
 * @returns
 */
export const keenCarouselAutoPlayPlugin =
  (interval?: number, pauseOnHover?: boolean) =>
  (slider: IKeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);

      if (!mouseOver) {
        timeout = setTimeout(() => {
          slider.next();
        }, interval);
      }
    }

    function onMouseOver() {
      if (pauseOnHover) {
        mouseOver = true;
        clearNextTimeout();
      }
    }

    function onMouseOut() {
      if (pauseOnHover) {
        mouseOver = false;
        nextTimeout();
      }
    }

    function onStart() {
      slider.container.addEventListener('mouseover', onMouseOver);
      slider.container.addEventListener('mouseout', onMouseOut);
      slider.on('animationEnded', nextTimeout);
      nextTimeout();
    }

    function onStop() {
      slider.container.removeEventListener('mouseover', onMouseOver);
      slider.container.removeEventListener('mouseout', onMouseOut);
      slider.on('animationEnded', nextTimeout, true);
      clearNextTimeout();
    }

    slider.on('created', interval ? onStart : onStop);
    slider.on('destroyed', onStop);
    slider.on('animationStopped', onStop);
    slider.on('animationStarted', interval ? onStart : onStop);
  };
