import type { Meta, StoryObj } from '@storybook/react';
import { SelectControl } from '.';
import { selectControlProps } from './story-props';
import { useArgs } from '@storybook/preview-api';
import { ISelectControl } from './interface';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SelectControl> = {
  title: 'Components/Inputs/Select Control',
  component: SelectControl,
  tags: ['autodocs'],
  argTypes: {
    onSelectChange: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    helperTextClassName: {
      table: {
        disable: true,
      },
    },
    labelClassName: {
      table: {
        disable: true,
      },
    },
    showErrorMsg: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, args) => {
      return (
        <div className="section-padding-primary bg-accent-5/50">
          <div className="mx-auto max-w-xs">
            <Story args={{ ...args.args }} />
          </div>
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof SelectControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: selectControlProps,
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ISelectControl>();

      return (
        <SelectControl
          {...args}
          onSelectChange={(value) => updateArgs({ ...args, value })}
        />
      );
    },
  ],
};
