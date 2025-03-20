import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';
import { cardProps } from './story-props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Examples/Card',
  component: Card,
  tags: ['autodocs'],
  args: cardProps,
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <div className="container">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const GridView: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4">
        {Array(9)
          .fill('_')
          .map((_, i) => (
            <Story key={i} />
          ))}
      </div>
    ),
  ],
};
