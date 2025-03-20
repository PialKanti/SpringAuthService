import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';
import { headerProps } from './story-props';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: headerProps,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
