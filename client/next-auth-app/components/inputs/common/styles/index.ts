import { cn } from '@/lib/shadcn/utils';
import { IInputControl } from '../../input-control/interface';

type Params = Pick<IInputControl, 'className' | 'disabled'> & {
  isError?: boolean;
  isValue?: boolean;
};

export function inputFieldCommonClassesGenerator({
  isError,
  isValue,
  disabled,
  className,
}: Params): string {
  return cn(
    // Layout styles
    'flex items-center min-h-[3rem] w-full rounded-lg px-3 py-1',

    // General styles
    ' bg-white text-black placeholder:text-gray-600 text-sm',

    // Border styles
    ' border border-solid border-gray-300',

    // Hover styles
    'hover:border-gray-600',

    // Focus styles
    'focus:border-black focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0',

    // Disabled styles
    'disabled:text-gray-300 disabled:placeholder:text-gray-300',

    // Animation
    'transition-all duration-300',

    // Border style
    {
      'border-black hover:border-black focus:border-black': isValue,
      'border-danger hover:border-danger focus:border-danger': isError,
      'border-gray-300 hover:border-gray-300 focus:border-gray-300': disabled,
    },

    // Additional custom className (optional)
    className
  );
}
