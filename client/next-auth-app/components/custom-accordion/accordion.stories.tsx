import type { Meta, StoryObj } from '@storybook/react';
import { CustomAccordion } from '.';
import { customAccordionProps } from './story-props';

const meta: Meta<typeof CustomAccordion> = {
  title: 'Components/Custom Accordion',
  component: CustomAccordion,
  tags: ['autodocs'],
  args: customAccordionProps,
  argTypes: {
    accordionItems: {
      table: {
        disable: true,
      },
    },
    collapsible: {
      control: 'boolean',
      if: { arg: 'type', eq: 'single' },
    },
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CustomAccordion>;

export const Primary: Story = {};
