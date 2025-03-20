import type { Meta, StoryObj } from '@storybook/react';

import { RadioControl } from '.';
import { useArgs, useState } from '@storybook/preview-api';
import { IRadioControl } from './interface';
import { radioControlProps } from './story-props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RadioControl> = {
  title: 'Components/Inputs/Radio Control',
  component: RadioControl,
  tags: ['autodocs'],
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    onRadioChange: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="section-padding-primary">
          <div className="container">
            <div className="mx-auto max-w-xs">
              <Story />
            </div>
          </div>
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof RadioControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: radioControlProps,
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<IRadioControl>();

      return (
        <div>
          <RadioControl
            {...args}
            onRadioChange={() =>
              updateArgs({ ...args, checked: !args.checked })
            }
          />
          <div className="mt-3">
            <div className="text-xs">State: {args.checked?.toString()}</div>
          </div>
        </div>
      );
    },
  ],
};

export const FormExample: Story = {
  args: radioControlProps,
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    ariaLabel: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (_, args) => {
      const [value, setValue] = useState('');

      return (
        <div className="flex w-fit flex-col items-start justify-start gap-4">
          <label className="text flex flex-row items-center justify-center gap-2 capitalize">
            <RadioControl
              {...args.args}
              onRadioChange={(e) => {
                setValue(e.target.value);
              }}
              checked={value === 'male'}
              value="male"
            />
            male
          </label>
          <label className="text flex flex-row items-center justify-center gap-2 capitalize">
            <RadioControl
              {...args.args}
              onRadioChange={(e) => {
                setValue(e.target.value);
              }}
              checked={value === 'female'}
              value="female"
            />
            female
          </label>
          {!!value && (
            <span>
              Selected Value: <span className="text-accent-1">{value}</span>
            </span>
          )}
        </div>
      );
    },
  ],
};
