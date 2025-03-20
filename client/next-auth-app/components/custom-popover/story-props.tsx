'use client';

import { useState } from 'react';
import { CustomPopover } from '.';
import { CustomButton } from '../custom-button';
import { cn } from '@/lib/shadcn/utils';
import { Typography } from '../typography';
import { IconStore } from '../icon-store';

export function CustomPopoverStorybook() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="section-padding-primary">
      <div className="container">
        <CustomPopover
          popoverOpen={popoverOpen}
          onCustomPopoverChange={setPopoverOpen}
          // Position the Popover.Content
          anchor={<div className="fixed right-0 top-0"></div>}
          // Custom trigger button for opening the drawer
          trigger={
            <CustomButton
              type="inline"
              colorScheme="primary"
              variant="fill"
              disabled={false}
              className="fixed right-7 top-7"
            >
              Custom Popover
            </CustomButton>
          }
          //padding & height is calculated to ignore the fixed header and footer
          scrollAreaViewportClassName={cn(
            'pt-[4.6rem] pb-[3.8rem] max-h-[calc(100dvh-2.25rem)]'
          )}
          // managed the padding & margin with height to match the background color
          scrollBarClassName={cn(
            'w-1 mr-1 rounded-lg bg-gray-400 h-[calc(100%-12rem)] my-auto p-0'
          )}
          content={
            <div>
              {/* Drawer Header implement with absolute */}
              <div className="absolute top-0 flex w-full flex-row items-center gap-5 rounded-tl-lg rounded-tr-lg border-b border-black bg-white p-4 md:p-5">
                <Typography
                  size="s1"
                  tagName="h3"
                  className="flex-1 text-base text-black"
                >
                  Stay up to date
                </Typography>
                <button
                  aria-label="popover close"
                  className="grid place-items-center"
                  onClick={() => setPopoverOpen(false)}
                >
                  <IconStore
                    iconName="close"
                    className="text-xl/[1] text-black"
                  />
                </button>
              </div>

              {/* Main Content/ Sanity Rich Text  */}
              <div className="grid gap-4 p-4 md:p-5">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate labore voluptates, suscipit quisquam fugit libero
                  vitae ratione rerum odio dolor! Labore ducimus repellendus
                  laborum dolorem libero? Maiores, ipsa! Dolorem quidem
                  aspernatur exercitationem quisquam a voluptas earum enim
                  deserunt ipsum error, nobis hic facere, amet libero, harum
                  dolores. Possimus, nam ipsum.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate labore voluptates, suscipit quisquam fugit libero
                  vitae ratione rerum odio dolor! Labore ducimus repellendus
                  laborum dolorem libero? Maiores, ipsa! Dolorem quidem
                  aspernatur exercitationem quisquam a voluptas earum enim
                  deserunt ipsum error, nobis hic facere, amet libero, harum
                  dolores. Possimus, nam ipsum.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate labore voluptates, suscipit quisquam fugit libero
                  vitae ratione rerum odio dolor! Labore ducimus repellendus
                  laborum dolorem libero? Maiores, ipsa! Dolorem quidem
                  aspernatur exercitationem quisquam a voluptas earum enim
                  deserunt ipsum error, nobis hic facere, amet libero, harum
                  dolores. Possimus, nam ipsum.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate labore voluptates, suscipit quisquam fugit libero
                  vitae ratione rerum odio dolor! Labore ducimus repellendus
                  laborum dolorem libero? Maiores, ipsa! Dolorem quidem
                  aspernatur exercitationem quisquam a voluptas earum enim
                  deserunt ipsum error, nobis hic facere, amet libero, harum
                  dolores. Possimus, nam ipsum.
                </p>
              </div>

              {/* Bottom Button */}
              <div className="absolute bottom-0 flex min-h-[3.75rem] w-full flex-shrink-0 items-center rounded-bl-lg rounded-br-lg border-t border-black bg-white px-4 py-3 md:px-5">
                <CustomButton
                  type="action"
                  colorScheme="primary"
                  variant="fill"
                  onButtonClick={() => {
                    alert('Hi i am closed');
                  }}
                  className="w-full"
                  disabled={false}
                >
                  Close
                </CustomButton>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
