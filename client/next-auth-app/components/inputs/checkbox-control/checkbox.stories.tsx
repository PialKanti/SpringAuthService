import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxControl } from '.';
import { useArgs, useState } from '@storybook/preview-api';
import { ICheckboxControl } from './interface';
import { checkboxControlProps } from './story-props';
import { ChangeEvent } from 'react';
import { cn } from '@/lib/shadcn/utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CheckboxControl> = {
  title: 'Components/Inputs/Checkbox Control',
  component: CheckboxControl,
  tags: ['autodocs'],
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    onCheckboxChange: {
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
type Story = StoryObj<typeof CheckboxControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: checkboxControlProps,
  decorators: [
    () => {
      const [args, updateArgs] = useArgs<ICheckboxControl>();

      return (
        <div>
          <CheckboxControl
            {...args}
            onCheckboxChange={() =>
              updateArgs({ ...args, checked: !args.checked })
            }
          />
          <div className="mt-3">
            <div className="text-xs">State: {args.checked?.toString()}</div>
          </div>
        </div>
      );
    },
  ],
};

const checkboxWrapperClasses = cn(
  'flex flex-row items-center justify-center gap-2 capitalize'
);

export const Example: Story = {
  args: checkboxControlProps,
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    ariaLabel: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (_, args) => {
      const [values, setValues] = useState<string[]>([]);

      const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currValue = e.target.value;
        setValues((prev) => {
          // Check the checkbox is checked, if checked then add this value otherwise remove the value from state.
          if (e.target.checked) return [...prev, currValue];
          else return [...prev.filter((prevValue) => prevValue != currValue)];
        });
      };

      return (
        <div className="flex w-fit flex-col items-start justify-start gap-4">
          <label className={checkboxWrapperClasses}>
            <CheckboxControl
              {...args.args}
              onCheckboxChange={handleOnChange}
              checked={values.includes('java')}
              value="java"
            />
            Java
          </label>
          <label className={checkboxWrapperClasses}>
            <CheckboxControl
              {...args.args}
              onCheckboxChange={handleOnChange}
              checked={values.includes('c')}
              value="c"
            />
            C
          </label>
          <label className={checkboxWrapperClasses}>
            <CheckboxControl
              {...args.args}
              onCheckboxChange={handleOnChange}
              checked={values.includes('c++')}
              value="c++"
            />
            C++
          </label>
          <label className={checkboxWrapperClasses}>
            <CheckboxControl
              {...args.args}
              onCheckboxChange={handleOnChange}
              checked={values.includes('php')}
              value="php"
            />
            PHP
          </label>
          <label className={checkboxWrapperClasses}>
            <CheckboxControl
              {...args.args}
              onCheckboxChange={handleOnChange}
              checked={values.includes('python')}
              value="python"
            />
            Python
          </label>
          <label className={checkboxWrapperClasses}>
            <CheckboxControl
              {...args.args}
              onCheckboxChange={handleOnChange}
              checked={values.includes('javascript')}
              value="javascript"
            />
            Javascript
          </label>
          {values.length > 0 && (
            <span>
              Selected Value:{' '}
              <span className="text-accent-1">{values.join(', ')}</span>
            </span>
          )}
        </div>
      );
    },
  ],
};
