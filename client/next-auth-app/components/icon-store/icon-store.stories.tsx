import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { IconStore } from '.';
import { icons } from './interface';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconStore> = {
  title: 'Components/Icon Store',
  component: IconStore,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconStore>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AllIcons: Story = {
  render: () => <IconsTemplate />,
};

function IconsTemplate() {
  const [search, setSearch] = useState('');
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto grid w-full max-w-[1800px]  gap-6 px-4 lg:gap-7">
        <div className="flex max-w-[320px] flex-col gap-2">
          <p className="text-md font-bold">Total Icon: {icons.length}</p>
          <label htmlFor="search-icon">Search Icons</label>
          <input
            id="search-icon"
            placeholder="Enter icon name"
            className="block w-full px-4 py-3 text-sm outline-slate-100 focus:outline"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
          {icons
            .filter((icon) => icon.includes(search))
            .map((icon, index) => (
              <div
                key={index}
                className="rounded-10 shadow-gray-light bg-white p-3 text-center align-top"
              >
                <IconStore
                  iconName={icon}
                  className="block p-[10px] text-[3rem]/[1] text-green-400 [&_svg]:mx-auto"
                />
                <div className="px-2 py-4 text-sm font-bold text-black">
                  {icon}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
