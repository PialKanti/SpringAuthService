import { FocusEventHandler } from 'react';

interface IItem {
  //label of the item
  label: string;
  //value of the item
  value: string;
}

export interface ISelectControl {
  // Name of the select control.
  name: string;
  // Array of items for the select control.
  items: IItem[];
  // Value for the select control.
  value: string;
  // Callback function triggered when the value of the select control changes.
  onSelectChange: (value: string) => void;
  // A function when a user leaves an input field:
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  // Label for the select control.
  label?: string;
  // Error message to display if there's an error.
  error?: string;
  // Flag indicating whether the select control is required.
  required?: boolean;
  // Helper text to provide additional guidance or information.
  helperText?: string;
  // Flag indicating whether to show the error message.
  showErrorMsg?: boolean;
  // CSS class name for the label.
  labelClassName?: string;
  // CSS class name for the helper text.
  helperTextClassName?: string;
  // Flag indicating whether the select control is disabled.
  disabled?: boolean;
  // CSS class name for the select control.
  className?: string;
}
