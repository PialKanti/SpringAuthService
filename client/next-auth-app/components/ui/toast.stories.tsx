import { toast } from 'sonner';
import { CustomButton } from '../custom-button';
import { Toaster } from './sonner';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Toaster> = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div className="section-padding-primary bg-white">
        <div className="container">
          <div className="mb-8 grid max-w-[500px] gap-1">
            <Typography size="h2" tagName="h2" className="font-bold">
              Types
            </Typography>
            <Typography size="p1">
              You can customize the type of toast you want to render, and pass
              an options object as the second argument.
            </Typography>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Default  */}
            <CustomButton
              type="action"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              onButtonClick={() => {
                toast('Event has been created');
              }}
            >
              Default
            </CustomButton>
            {/* Description  */}
            <CustomButton
              type="action"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              onButtonClick={() => {
                toast.message('Event has been created', {
                  description: 'Monday, January 3rd at 6:00pm',
                });
              }}
            >
              Description
            </CustomButton>

            {/* Success */}
            <CustomButton
              type="action"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              onButtonClick={() => {
                toast.success('Event has been created');
              }}
            >
              Success
            </CustomButton>

            {/* Info */}
            <CustomButton
              type="action"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              onButtonClick={() => {
                toast.info('Be at the area 10 minutes before the event time');
              }}
            >
              Info
            </CustomButton>

            {/* Warning */}
            <CustomButton
              type="action"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              onButtonClick={() => {
                toast.warning(
                  'Be at the area 10 minutes before the event time'
                );
              }}
            >
              Warning
            </CustomButton>

            {/* Error */}
            <CustomButton
              type="action"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              onButtonClick={() => {
                toast.error('Be at the area 10 minutes before the event time');
              }}
            >
              Error
            </CustomButton>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: StoryObj<typeof Toaster> = {};
