import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import { RawCarousel } from '.';
import {
  rawCarouselCardProps,
  rawCarouselProps,
  rawCarouselWithOffsetProps,
} from './story-props';
import { RawCarouselItem } from './sub-components/item';
import { Typography } from '@/components/typography';
import { IImage } from '@/lib/types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RawCarousel> = {
  title: 'Components/Carousel/RawCarousel',
  component: RawCarousel,
  tags: ['autodocs'],
  args: rawCarouselProps,
  decorators: [
    (Story) => (
      <section className="section-padding-primary">
        <div className="container">
          <Story />
        </div>
      </section>
    ),
  ],
  parameters: {
    layout: true,
  },
};

interface ICard {
  title: string;
  image: IImage;
  description?: string;
}

function Card({ title, image, description }: ICard) {
  return (
    <div className="grow rounded-md border border-gray-400 bg-white">
      <Image
        src={image.src}
        alt={image.alt || title}
        placeholder="blur"
        blurDataURL={image.lqip}
        width={image.width}
        height={image.height}
        className="w-full"
      />
      <div className="flex flex-col gap-2 p-4 lg:p-5">
        <Typography size="h3">{title}</Typography>
        {description && <Typography size="p1">{description}</Typography>}
      </div>
    </div>
  );
}

export default meta;
type Story = StoryObj<typeof RawCarousel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => (
    <RawCarousel {...rawCarouselProps}>
      {rawCarouselCardProps &&
        rawCarouselCardProps.length > 0 &&
        rawCarouselCardProps.map((card, index) => (
          <RawCarouselItem key={index}>
            <Card {...card} />
          </RawCarouselItem>
        ))}
    </RawCarousel>
  ),
};

export const Offset: Story = {
  render: () => (
    <RawCarousel {...rawCarouselWithOffsetProps}>
      {rawCarouselCardProps &&
        rawCarouselCardProps.length > 0 &&
        rawCarouselCardProps.map((card, index) => (
          <RawCarouselItem key={index}>
            <Card {...card} />
          </RawCarouselItem>
        ))}
    </RawCarousel>
  ),
};
