import type { Meta, StoryObj } from '@storybook/react';

import { CustomLink } from '.';
import { customLinkProps } from './story-props';
import { cn } from '@/lib/shadcn/utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomLink> = {
  title: 'Components/Custom Link',
  component: CustomLink,
  tags: ['autodocs'],
  args: {
    ...customLinkProps,
    className: cn(
      'underline text-lg lg:text-2xl font-semibold hover:text-info transition-colors aria-disabled:text-black/50'
    ),
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary container">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CustomLink>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
