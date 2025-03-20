import { Switch } from '@/components/ui/switch';
import { ISwitchControl } from './interface';
import { cn } from '@/lib/shadcn/utils';

/**
 * `SwitchControl` component toggles between true and false values
 * which also includes error handling and a disabled property.
 */
export const SwitchControl = ({
  name,
  checked,
  id,
  disabled,
  error,
  className,
  required,
  onSwitchChange,
  ariaLabel,
}: ISwitchControl) => {
  const switchClasses = cn(
    /** Default style */
    'h-[1.125rem] w-9 border transition-all duration-300 [&>span]:size-[0.875rem]',

    /** Unchecked Style */
    // Default Style
    'data-[state=unchecked]:bg-gray-600 data-[state=unchecked]:border-gray-600 data-[state=unchecked]:[&>span]:translate-x-[0.0625rem]',
    // Hover Style
    'data-[state=unchecked]:hover:bg-black data-[state=unchecked]:hover:border-black',

    /** Checked Style */
    // Default Style
    'data-[state=checked]:bg-blue-500 data-[state=checked]:border-primary data-[state=checked]:[&>span]:translate-x-[1.1875rem]',

    /** Error Style */
    error && '!border-danger',
    /** Disable Style */
    'disabled:!bg-gray-300 disabled:!border-gray-300',
    className
  );
  return (
    <Switch
      name={name}
      checked={checked}
      id={id}
      disabled={disabled}
      className={switchClasses}
      required={required}
      onCheckedChange={onSwitchChange}
      aria-label={ariaLabel || 'Toggle switch'}
      aria-disabled={disabled}
      aria-required={required}
      aria-invalid={error}
    />
  );
};
