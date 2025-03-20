import { ChangeEventHandler, FocusEventHandler } from 'react';

export interface ITextareaControl {
  /** The name of the textarea control. */
  name: string;
  /** The current value of the textarea control. */
  value: string;
  /** A function to handle textarea change events. */
  onTextareaChange: ChangeEventHandler<HTMLTextAreaElement>;
  /** A function to handle textarea focus events. */
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  /** A short hint that describes the expected value of the textarea control. */
  placeholder?: string;
  /** A label for the textarea control. */
  label?: string;
  /** Indicates whether the textarea control is required. */
  required?: boolean;
  /** Indicates whether the textarea control is disabled. */
  disabled?: boolean;
  /** Indicates whether to show an error message. */
  showErrorMsg?: boolean;
  /** An error message to display. */
  error?: string;
  /** A helper text to display below the textarea control. */
  helperText?: string;
  /** CSS class name for the textarea control. */
  className?: string;
  /** CSS class name for the label. */
  labelClassName?: string;
  /** CSS class name for the helper text. */
  helperTextClassName?: string;
}
