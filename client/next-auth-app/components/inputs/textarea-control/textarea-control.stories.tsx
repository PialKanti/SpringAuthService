import type { Meta, StoryObj } from '@storybook/react';

import { TextareaControl } from '.';
import { textareaControlProps } from './story-props';
import { useArgs } from '@storybook/preview-api';
import { ITextareaControl } from './interface';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextareaControl> = {
  title: 'Components/Inputs/Textarea Control',
  component: TextareaControl,
  tags: ['autodocs'],
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    onTextareaChange: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, args) => {
      return (
        <div className="section-padding-primary">
          <div className="container">
            <div className="mx-auto max-w-xs">
              <Story args={{ ...args.args }} />
            </div>
          </div>
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof TextareaControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: textareaControlProps,
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ITextareaControl>();

      return (
        <TextareaControl
          {...args}
          onTextareaChange={(e) =>
            updateArgs({ ...args, value: e.target.value })
          }
        />
      );
    },
  ],
};
