import { ChangeEventHandler, FocusEventHandler } from 'react';

export interface IInputControl {
  /** The name of the input control. */
  name: string;
  /** The current value of the input control. */
  value: string;
  /** A function to handle input change events. */
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  /** A function to handle input focus events. */
  onBlur?: FocusEventHandler<HTMLInputElement>;
  /** The type of the input control. */
  type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
  /** A short hint that describes the expected value of the input control. */
  placeholder?: string;
  /** A label for the input control. */
  label?: string;
  /** Indicates whether the input control is required. */
  required?: boolean;
  /** Indicates whether the input control is disabled. */
  disabled?: boolean;
  /** The autocomplete attribute of the input control. */
  autoComplete?: string;
  /** Indicates whether to show an error message. */
  showErrorMsg?: boolean;
  /** An error message to display. */
  error?: string;
  /** A helper text to display below the input control. */
  helperText?: string;
  /** Indicates whether to show a success icon. */
  showSuccessIcon?: boolean;
  /** CSS class name for the input control. */
  className?: string;
  /** CSS class name for the label. */
  labelClassName?: string;
  /** CSS class name for the helper text. */
  helperTextClassName?: string;
}
