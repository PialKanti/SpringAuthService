'use client';

import { KeenCarousel } from '@/components/carousel/keen-carousel';
import { useCustomKeenSlider } from '@/components/carousel/keen-carousel/hooks/use-custom-keen-slider';
import { keenCarouselTouchScrollPlugin } from '@/components/carousel/keen-carousel/plugins/touch-scroll';
import { KeenCarouselItem } from '@/components/carousel/keen-carousel/sub-components/item';
import { Typography } from '@/components/typography';
import { cn } from '@/lib/shadcn/utils';
import { Breakpoints } from '@/lib/types';

const itemsPerSlideConfig1: Breakpoints = {
  initial: 1.2,
  sm: 1.2,
  md: 2,
  lg: 2,
  xl: 3,
  '2xl': 4,
};

const itemGapConfig1: Breakpoints = {
  initial: 20,
  sm: 20,
  md: 24,
  lg: 24,
  xl: 24,
  '2xl': 24,
};

interface ICard {
  title: string;
  className?: string;
}

function Card({ title, className }: ICard) {
  return (
    <div
      className={cn(
        'grid min-h-48 w-full place-items-center border-2 border-solid border-black bg-white shadow-lg',
        className
      )}
    >
      <h3 className="text-[1.25rem] font-bold">{title}</h3>
    </div>
  );
}

export default function Page() {
  const { currentSlide, sliderReady, sliderRef, instanceRef } =
    useCustomKeenSlider({
      transitionSpeed: 2000,
      itemsPerSlide: itemsPerSlideConfig1,
      itemGap: itemGapConfig1,
      plugins: [keenCarouselTouchScrollPlugin],
    });

  return (
    <>
      <div className="overflow-hidden bg-gray-100 py-20">
        <div className="container">
          <KeenCarousel
            currentSlide={currentSlide}
            sliderReady={sliderReady}
            sliderRef={sliderRef}
            instanceRef={instanceRef}
            // Navigation
            haveOffset={false}
            hasNavigation={true}
            // Progress
            hasProgress
            progressWrapperClassName={cn('mt-7 md:mt-10')}
            itemsPerSlide={itemsPerSlideConfig1}
            itemGap={itemGapConfig1}
          >
            {Array.from({ length: 40 }, (_, i) => i + 1).map((_, index) => (
              <KeenCarouselItem key={index}>
                <Card
                  title={`Slide ${index + 1}`}
                  className={cn(
                    'min-h-80 rounded-lg border-none shadow-none  transition-colors duration-300',
                    currentSlide == index && 'bg-blue-500 text-white'
                  )}
                />
              </KeenCarouselItem>
            ))}
          </KeenCarousel>
        </div>
      </div>
      <DummySection />
      <DummySection className="bg-red-100" />
      <DummySection />
    </>
  );
}

const cards: { title: string; description: string }[] = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum minus repellendus provident sequi inventore esse, dolorum facere dolorem atque.',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum minus repellendus provident sequi inventore esse, dolorum facere dolorem atque.',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum minus repellendus provident sequi inventore esse, dolorum facere dolorem atque.',
  },
];

function DummySection({ className }: { className?: string }) {
  return (
    <div className={cn('section-padding-primary bg-gray-300', className)}>
      <div className="container">
        {!!cards.length && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="space-y-6 rounded-lg bg-white p-6 text-black shadow-lg"
              >
                <Typography size="h3">{card.title}</Typography>
                <Typography size="p1">{card.description}</Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
