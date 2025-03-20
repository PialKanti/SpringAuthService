import type { Meta, StoryObj } from '@storybook/react';
import { PeopleCarousel } from '.';
import { peopleCarouselProps } from './story-props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PeopleCarousel> = {
  title: 'Creative/People Carousel',
  component: PeopleCarousel,
  tags: ['autodocs'],
  args: peopleCarouselProps,
};

export default meta;
type Story = StoryObj<typeof PeopleCarousel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
