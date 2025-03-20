import type { Meta, StoryObj } from '@storybook/react';

import { InputControl } from '.';
import { inputControlProps } from './story-props';
import { useArgs } from '@storybook/preview-api';
import { IInputControl } from './interface';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputControl> = {
  title: 'Components/Inputs/Input Control',
  component: InputControl,
  tags: ['autodocs'],
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    onInputChange: {
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
type Story = StoryObj<typeof InputControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: inputControlProps,
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<IInputControl>();

      return (
        <InputControl
          {...args}
          onInputChange={(e) => updateArgs({ ...args, value: e.target.value })}
        />
      );
    },
  ],
};

export const Password: Story = {
  args: {
    ...inputControlProps,
    label: 'Password',
    name: 'password',
    type: 'password',
  },
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<IInputControl>();

      return (
        <InputControl
          {...args}
          onInputChange={(e) => updateArgs({ ...args, value: e.target.value })}
        />
      );
    },
  ],
};
