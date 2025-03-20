import type { Meta, StoryObj } from '@storybook/react';
import { CustomPopover } from '.';
import { useArgs, useState } from '@storybook/preview-api';
import { ICustomPopover } from './interface';
import { CustomButton } from '../custom-button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomPopover> = {
  title: 'Components/Custom Popover',
  component: CustomPopover,
  tags: ['autodocs'],
  argTypes: {
    onCustomPopoverChange: {
      table: {
        disable: true,
      },
    },
    anchor: {
      table: {
        disable: true,
      },
    },
    trigger: {
      table: {
        disable: true,
      },
    },
    content: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    contentWrapperClassName: {
      table: {
        disable: true,
      },
    },
    scrollBarClassName: {
      table: {
        disable: true,
      },
    },
    scrollAreaViewportClassName: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomPopover>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    closeOnOutSideClick: true,
  },
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ICustomPopover>();

      const modalCloseHandler = () => {
        updateArgs({ ...args, popoverOpen: false });
      };

      return (
        <div className="section-padding-primary">
          <div className="container">
            <div className="flex items-center justify-center">
              <CustomPopover
                {...args}
                onCustomPopoverChange={(open) =>
                  updateArgs({ ...args, popoverOpen: open })
                }
                trigger={
                  <CustomButton
                    type="inline"
                    colorScheme="primary"
                    variant="fill"
                    disabled={false}
                  >
                    Open Popover
                  </CustomButton>
                }
                content={
                  <div className="flex flex-col items-center gap-5 rounded px-4 py-5">
                    <h3 className="text-center text-xl font-semibold">
                      Popover Title
                    </h3>
                    <h3 className="text-md text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit magnam voluptate voluptates blanditiis, aut quam
                      dicta labore distinctio et id?
                    </h3>
                    <CustomButton
                      type="action"
                      colorScheme="primary"
                      variant="fill"
                      disabled={false}
                      onButtonClick={modalCloseHandler}
                    >
                      Close
                    </CustomButton>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      );
    },
  ],
};

export const AsyncAwait: Story = {
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ICustomPopover>();
      const [loading, setLoading] = useState(false);

      const modalCloseHandler = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          updateArgs({ ...args, popoverOpen: false });
        }, 2000);
      };

      return (
        <div className="section-padding-primary">
          <div className="container">
            <div className="flex items-center justify-center">
              <CustomPopover
                {...args}
                onCustomPopoverChange={(open) =>
                  updateArgs({ ...args, popoverOpen: open })
                }
                closeOnOutSideClick={false}
                trigger={
                  <CustomButton
                    type="inline"
                    colorScheme="primary"
                    variant="fill"
                    disabled={false}
                  >
                    Open Popover
                  </CustomButton>
                }
                content={
                  <div className="flex flex-col items-center gap-5 rounded px-4 py-5">
                    <h3 className="text-center text-xl font-semibold">
                      Popover Title
                    </h3>
                    <h3 className="text-md text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit magnam voluptate voluptates blanditiis, aut quam
                      dicta labore distinctio et id?
                    </h3>
                    <CustomButton
                      type="action"
                      colorScheme="primary"
                      variant="fill"
                      disabled={false}
                      onButtonClick={modalCloseHandler}
                      loading={loading}
                    >
                      Close
                    </CustomButton>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      );
    },
  ],
};
