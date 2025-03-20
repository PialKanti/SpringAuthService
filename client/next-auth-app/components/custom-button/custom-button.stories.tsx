import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from '.';
import {
  normalButtonProps,
  normalButtonLoadingProps,
  linkButtonProps,
  formButtonProps,
  inlineButtonProps,
} from './story-props';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomButton> = {
  title: 'Components/Custom Button',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    onButtonClick: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    colorScheme: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['fill', 'outline'],
      control: { type: 'radio' },
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
type Story = StoryObj<typeof CustomButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: normalButtonProps,
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    prefetch: {
      table: {
        disable: true,
      },
    },
  },
};

export const LoadingState: Story = {
  args: normalButtonLoadingProps,
  argTypes: Default.argTypes,
};

export const DisabledState: Story = {
  args: {
    ...normalButtonProps,
    disabled: true,
  },
  argTypes: Default.argTypes,
};

export const LinkButton: Story = {
  args: linkButtonProps,
  argTypes: { loading: { table: { disable: true } } },
};

export const FormButton: Story = {
  args: formButtonProps,
};

export const InlineButton: Story = {
  args: inlineButtonProps,
  argTypes: {
    loading: {
      table: {
        disable: true,
      },
    },
  },
};
