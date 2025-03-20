import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from '../custom-button';
import { Typography } from '../typography';
import { CustomSheet } from '.';
import { useArgs } from '@storybook/preview-api';
import { ICustomSheet } from './interface';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomSheet> = {
  title: 'Components/Custom Sheet',
  component: CustomSheet,
  tags: ['autodocs'],
  argTypes: {
    side: {
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'radio' },
    },
    onCustomSheetChange: {
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
type Story = StoryObj<typeof CustomSheet>;

export const Default: Story = {
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ICustomSheet>();
      return (
        <CustomSheet
          {...args}
          onCustomSheetChange={(open) =>
            updateArgs({ ...args, sheetOpen: open })
          }
          // Custom trigger button for opening the drawer
          trigger={
            <CustomButton
              type="action"
              disabled={false}
              colorScheme="primary"
              variant="fill"
              onButtonClick={() => updateArgs({ ...args, sheetOpen: true })}
            >
              <span>Open Drawer</span>
            </CustomButton>
          }
          // Adjusts the top and bottom padding to ensure the scrollbar thumb is
          // visible at the start and end of the content. This calculation
          // incorporates the content's top and bottom padding, as well as the
          // heights of the sticky header and footer.
          scrollBarClassName="pb-[6.8125rem] pt-[5.0625rem] mr-1"
          content={
            <>
              {/* Drawer Header implement with absolute */}
              <div className="absolute top-0 w-full border-b border-gray-300 bg-white px-5 py-4 text-center font-semibold">
                <Typography
                  size="h3"
                  className="text-center font-semibold text-black"
                >
                  Drawer Title
                </Typography>
              </div>
              {/** Ensures the first and last content items are visible by
               * adjusting the top and bottom padding.
               * @Calculation
               *   pt-[5.0625rem] = 61px (Header height) + 20px (Content top
               *     padding)
               *   pb-[6.8125rem] = 89px (Footer height) + 20px (Content
               *     bottom padding)
               */}
              <div className="flex flex-col gap-5 p-5 pb-[6.8125rem] pt-[5.0625rem]">
                <DummyDrawerContent />
              </div>
              {/* Drawer Footer implement with absolute */}
              <div className="absolute bottom-0 w-full border-t border-gray-300 bg-white p-5 text-center font-semibold">
                <CustomButton
                  type="action"
                  colorScheme="primary"
                  variant="fill"
                  onButtonClick={() => {
                    updateArgs({ ...args, sheetOpen: false });
                  }}
                  className="w-full"
                  disabled={false}
                >
                  Close Drawer
                </CustomButton>
              </div>
            </>
          }
        />
      );
    },
  ],
};

const DummyDrawerContent = () => {
  return (
    <>
      <Typography size="s1">Paragraph Title 1</Typography>
      <Typography size="p1" className="text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        laudantium architecto animi, dolores saepe, impedit blanditiis quis
        excepturi deserunt quod deleniti consequuntur vel totam, perspiciatis
        eaque culpa ab adipisci cumque!
      </Typography>
      <Typography size="s1">Paragraph Title 2</Typography>
      <Typography size="p1" className="text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        laudantium architecto animi, dolores saepe, impedit blanditiis quis
        excepturi deserunt quod deleniti consequuntur vel totam, perspiciatis
        eaque culpa ab adipisci cumque! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Suscipit, cupiditate? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Corporis numquam ipsa ratione omnis sunt
        facere ducimus et repudiandae, alias facilis eaque neque assumenda nisi
        doloremque commodi fugit, molestias illo cum reprehenderit ea. Repellat,
        tenetur! Voluptatem dolorem labore distinctio provident corporis fuga
        blanditiis ea voluptatum expedita sequi, hic accusamus tempore ipsum,
        reiciendis modi consequuntur animi incidunt minus beatae possimus enim
        quisquam?
      </Typography>
      <Typography size="s1">Paragraph Title 3</Typography>
      <Typography size="p1" className="text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        laudantium architecto animi, dolores saepe, impedit blanditiis quis
        excepturi deserunt quod deleniti consequuntur vel totam, perspiciatis
        eaque culpa ab adipisci cumque! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Cum nobis error totam molestias accusamus ex veritatis
        tempore voluptate reiciendis sunt.
      </Typography>
      <Typography size="s1">Paragraph Title 4</Typography>
      <Typography size="p1" className="text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        laudantium architecto animi, dolores saepe, impedit blanditiis quis
        excepturi deserunt quod deleniti consequuntur vel totam, perspiciatis
        eaque culpa ab adipisci cumque! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Cum nobis error totam molestias accusamus ex veritatis
        tempore voluptate reiciendis sunt. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Delectus provident dolores modi nobis
        dolor eaque facere explicabo harum, inventore ipsum reiciendis at,
        blanditiis dignissimos quisquam beatae optio, omnis sunt cum? Aspernatur
        consequatur aperiam obcaecati quo, mollitia, vero quaerat voluptate
        eaque quis ipsa saepe corrupti accusamus cumque minima voluptatibus.
        Veritatis, provident? Rerum laboriosam voluptatem unde, mollitia eius
        cum dolores recusandae sapiente.
      </Typography>
    </>
  );
};
