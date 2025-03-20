import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';
import { typographyProps, typographyShowcaseProps } from './story-props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: 'Creative/Fluid Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
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
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: 'hero',
    children: typographyProps.children,
  },
};

function ShowCase() {
  return (
    <>
      {typographyShowcaseProps && typographyShowcaseProps.length > 0 && (
        <div className="grid gap-4">
          {typographyShowcaseProps.map((typo, index) => (
            <div className="grid gap-1" key={index}>
              <Typography size="o1" className="text-blue-500">
                {typo.size}
              </Typography>
              <Typography size={typo.size}>{typo.children}</Typography>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export const AllShowCase: Story = {
  args: {
    size: 'hero',
    children: typographyProps.children,
  },
  render: ShowCase,
};
