import type { Meta, StoryObj } from '@storybook/react';
import { useArgs, useState } from '@storybook/preview-api';
import { CustomButton } from '../custom-button';
import { CustomModal } from '.';
import { ICustomModal } from './interface';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomModal> = {
  title: 'Components/Custom Modal',
  component: CustomModal,
  tags: ['autodocs'],
  argTypes: {
    content: { table: { disable: true } },
    trigger: {
      table: { disable: true },
    },
    onCustomModalChange: {
      table: { disable: true },
    },
    contentWrapperClassName: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomModal>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    closeOnOutSideClick: true,
  },
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ICustomModal>();

      const modalClickHandler = () => {
        updateArgs({ ...args, modalOpen: true });
      };

      const modalCloseHandler = () => {
        updateArgs({ ...args, modalOpen: false });
      };

      return (
        <div className="section-padding-primary">
          <div className="container">
            <CustomModal
              {...args}
              onCustomModalChange={(open) =>
                updateArgs({ ...args, modalOpen: open })
              }
              trigger={
                <CustomButton
                  type="action"
                  colorScheme="primary"
                  variant="fill"
                  disabled={false}
                  onButtonClick={modalClickHandler}
                >
                  Show Modal
                </CustomButton>
              }
              content={
                <div className="flex flex-col items-center gap-5 rounded px-4 py-5">
                  <h3 className="text-center text-xl font-semibold">
                    Modal Title
                  </h3>
                  <h3 className="text-md text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit magnam voluptate voluptates blanditiis, aut quam dicta
                    labore distinctio et id?
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
      );
    },
  ],
};

export const AsyncAwait: Story = {
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ICustomModal>();
      const [loading, setLoading] = useState(false);

      const modalClickHandler = () => {
        updateArgs({ ...args, modalOpen: true });
      };

      const modalCloseHandler = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          updateArgs({ ...args, modalOpen: false });
        }, 1500);
      };

      return (
        <div className="section-padding-primary container">
          <CustomModal
            {...args}
            onCustomModalChange={(open) =>
              updateArgs({ ...args, modalOpen: open })
            }
            trigger={
              <CustomButton
                type="action"
                colorScheme="primary"
                variant="fill"
                disabled={false}
                onButtonClick={modalClickHandler}
              >
                Show Modal
              </CustomButton>
            }
            content={
              <div className="flex flex-col items-center gap-5 rounded px-4 py-5">
                <h3 className="text-center text-xl font-semibold">
                  Modal Title
                </h3>
                <h3 className="text-md text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  magnam voluptate voluptates blanditiis, aut quam dicta labore
                  distinctio et id?
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
      );
    },
  ],
};
