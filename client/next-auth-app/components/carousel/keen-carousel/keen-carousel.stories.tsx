import type { Meta, StoryObj } from '@storybook/react';
import { KeenCarousel } from '.';
import { KeenCarouselItem } from './sub-components/item';
import { keenCarouselOptions } from './story-props';
import { cn } from '@/lib/shadcn/utils';
import { Breakpoints } from '@/lib/types';
import { useCustomKeenSlider } from './hooks/use-custom-keen-slider';
import { Typography } from '@/components/typography';
import { keenCarouselTouchScrollPlugin } from './plugins/touch-scroll';
import { keenCarouselAutoPlayPlugin } from './plugins/autoplay';
import { KeenCarouselThumbnailPlugin } from './plugins/thumbnail';

const meta: Meta<typeof KeenCarousel> = {
  title: 'Components/Carousel/Keen Caraousel',
  component: KeenCarousel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: keenCarouselOptions,
  parameters: {
    layout: true,
  },
};

export default meta;

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

type Story = StoryObj<typeof KeenCarousel>;

export const Default: Story = {
  render: (args) => {
    const { currentSlide, sliderReady, sliderRef, instanceRef } =
      useCustomKeenSlider({});

    return (
      <div className="overflow-hidden py-20">
        <div className="container">
          <KeenCarousel
            {...args}
            currentSlide={currentSlide}
            sliderReady={sliderReady}
            sliderRef={sliderRef}
            instanceRef={instanceRef}
          >
            {Array.from({ length: 6 }, (_, i) => i + 1).map((_, index) => (
              <KeenCarouselItem key={index}>
                <Card title={`Slide ${index + 1}`} />
              </KeenCarouselItem>
            ))}
          </KeenCarousel>
        </div>
      </div>
    );
  },
};

const itemsPerSlideConfig1: Breakpoints = {
  initial: 1.2,
  sm: 1.2,
  md: 2,
  lg: 2,
  xl: 2,
  '2xl': 5,
};

const itemGapConfig1: Breakpoints = {
  initial: 80,
  sm: 80,
  md: 58,
  lg: 80,
  xl: 80,
  '2xl': 80,
};

export const AutoplayExample: Story = {
  render: (args) => {
    /**
     * @Note Need to pass the same values of itemsPerSlide & itemsGap
     * as props for KeenCarousel component.
     *
     * We are passing this to avoid the flickering issue during initial stage
     */
    const { currentSlide, sliderReady, sliderRef, instanceRef } =
      useCustomKeenSlider({
        transitionSpeed: 2000,
        itemsPerSlide: itemsPerSlideConfig1,
        itemGap: itemGapConfig1,
        plugins: [keenCarouselAutoPlayPlugin(1500, false)],
      });

    return (
      <div className="overflow-hidden bg-gray-100 py-20">
        <div className="container">
          <KeenCarousel
            {...args}
            currentSlide={currentSlide}
            sliderReady={sliderReady}
            sliderRef={sliderRef}
            instanceRef={instanceRef}
            haveOffset={true}
            hasNavigation={true}
            hasProgress
            progressWrapperClassName={cn('mt-7 md:mt-10')}
            itemsPerSlide={itemsPerSlideConfig1}
            itemGap={itemGapConfig1}
          >
            {Array.from({ length: 100 }, (_, i) => i + 1).map((_, index) => (
              <KeenCarouselItem key={index}>
                <Card
                  title={`Slide ${index + 1}`}
                  className="min-h-80 border-none shadow-none"
                />
              </KeenCarouselItem>
            ))}
          </KeenCarousel>
        </div>
      </div>
    );
  },
};

const itemsPerSlideConfig2: Breakpoints = {
  initial: 1,
  sm: 3,
  md: 2,
  lg: 2,
  xl: 2,
  '2xl': 1,
};

const itemGapConfig2: Breakpoints = {
  initial: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  '2xl': 0,
};

export const DifferentConfigExample: Story = {
  render: (args) => {
    /**
     * @Note Need to pass the same values of itemsPerSlide & itemsGap
     * as props for KeenCarousel component.
     *
     * We are passing this to avoid the flickering issue during initial stage
     */
    const { currentSlide, sliderReady, sliderRef, instanceRef } =
      useCustomKeenSlider({
        itemsPerSlide: itemsPerSlideConfig2,
        itemGap: itemGapConfig2,
      });

    return (
      <div className="overflow-hidden bg-gray-100 py-20">
        <div className="container">
          <div className="mx-auto max-w-[320px]">
            <KeenCarousel
              {...args}
              currentSlide={currentSlide}
              sliderReady={sliderReady}
              sliderRef={sliderRef}
              instanceRef={instanceRef}
              haveOffset={false}
              hasPagination
              paginationWrapperClassName="absolute bottom-2 right-0 left-0 !m-0 gap-1"
              itemsPerSlide={itemsPerSlideConfig2}
              itemGap={itemGapConfig2}
            >
              {Array.from({ length: 6 }, (_, i) => i + 1).map((_, index) => (
                <KeenCarouselItem key={index}>
                  <Card
                    title={`Slide ${index + 1}`}
                    className="min-h-80 border-none shadow-none"
                  />
                </KeenCarouselItem>
              ))}
            </KeenCarousel>
          </div>
        </div>
      </div>
    );
  },
};

export const TouchScrollExample: Story = {
  render: (args) => {
    /**
     * @Note Need to pass the same values of itemsPerSlide & itemsGap
     * as props for KeenCarousel component.
     *
     * We are passing this to avoid the flickering issue during initial stage
     */
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
              {...args}
              currentSlide={currentSlide}
              sliderReady={sliderReady}
              sliderRef={sliderRef}
              instanceRef={instanceRef}
              haveOffset={true}
              hasNavigation={true}
              hasProgress
              progressWrapperClassName={cn('mt-7 md:mt-10')}
              itemsPerSlide={itemsPerSlideConfig1}
              itemGap={itemGapConfig1}
            >
              {Array.from({ length: 100 }, (_, i) => i + 1).map((_, index) => (
                <KeenCarouselItem key={index}>
                  <Card
                    title={`Slide ${index + 1}`}
                    className="min-h-80 border-none shadow-none"
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
  },
};

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

const itemsPerSlideConfig3: Breakpoints = {
  initial: 1,
  sm: 1,
  md: 1,
  lg: 1,
  xl: 1,
  '2xl': 1,
};

const itemGapConfig3: Breakpoints = {
  initial: 16,
  sm: 20,
  md: 20,
  lg: 24,
  xl: 24,
  '2xl': 24,
};

const itemsPerSlideConfig4: Breakpoints = {
  initial: 3,
  sm: 3,
  md: 4,
  lg: 4,
  xl: 4,
  '2xl': 4,
};

const itemGapConfig4: Breakpoints = {
  initial: 16,
  sm: 20,
  md: 20,
  lg: 24,
  xl: 24,
  '2xl': 24,
};

export const ThumbnailExample: Story = {
  render: () => {
    /**
     * @Note Need to pass the same values of itemsPerSlide & itemsGap
     * as props for KeenCarousel component.
     *
     * We are passing this to avoid the flickering issue during initial stage
     */
    const { currentSlide, sliderReady, sliderRef, instanceRef } =
      useCustomKeenSlider({
        transitionSpeed: 2000,
        itemsPerSlide: itemsPerSlideConfig3,
        itemGap: itemGapConfig3,
      });

    /**
     * @Note Need to pass the same values of itemsPerSlide & itemsGap
     * as props for KeenCarousel component.
     *
     * We are passing this to avoid the flickering issue during initial stage
     */
    const {
      currentSlide: currentSlide2,
      sliderReady: sliderReady2,
      sliderRef: sliderRef2,
      instanceRef: instanceRef2,
    } = useCustomKeenSlider({
      transitionSpeed: 2000,
      itemsPerSlide: itemsPerSlideConfig4,
      itemGap: itemGapConfig4,
      plugins: [KeenCarouselThumbnailPlugin(instanceRef)],
    });

    return (
      <div className="overflow-hidden bg-gray-100 py-20">
        <div className="container">
          {/* Main   */}
          <KeenCarousel
            currentSlide={currentSlide}
            sliderReady={sliderReady}
            sliderRef={sliderRef}
            instanceRef={instanceRef}
            haveOffset={false}
            hasNavigation={true}
            hasProgress
            progressWrapperClassName={cn('my-7 md:my-10')}
            itemsPerSlide={itemsPerSlideConfig3}
            itemGap={itemGapConfig3}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((_, index) => (
              <KeenCarouselItem key={index}>
                <Card
                  title={`Slide ${index + 1}`}
                  className="min-h-80 border-none shadow-none"
                />
              </KeenCarouselItem>
            ))}
          </KeenCarousel>

          {/* Thumbnail */}
          <KeenCarousel
            currentSlide={currentSlide2}
            sliderReady={sliderReady2}
            sliderRef={sliderRef2}
            instanceRef={instanceRef2}
            haveOffset={false}
            itemsPerSlide={itemsPerSlideConfig4}
            itemGap={itemGapConfig4}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((_, index) => (
              <KeenCarouselItem key={index}>
                <Card
                  title={`Thumbnail ${index + 1}`}
                  className="min-h-80 border-none shadow-none"
                />
              </KeenCarouselItem>
            ))}
          </KeenCarousel>
        </div>
      </div>
    );
  },
};
