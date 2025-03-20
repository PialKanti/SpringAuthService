import { ChangeEventHandler } from 'react';

export interface IRadioControl {
  /** Specifies whether the radio control is checked. */
  checked: boolean;
  /** Event handler for when the radio control value changes. */
  onRadioChange: ChangeEventHandler<HTMLInputElement>;
  /** The current value of the radio control. */
  value?: string;
  /** The name attribute of the radio control. */
  name?: string;
  /** The unique identifier for the radio control. */
  id?: string;
  /** Specifies whether the radio control is disabled. */
  disabled?: boolean;
  /** Specifies whether there's an error state associated with the radio control. */
  error?: boolean;
  /** Additional CSS class names for styling purposes. */
  className?: string;
  /** Specifies whether the radio control is required. */
  required?: boolean;
  /** ARIA label for accessibility purposes. */
  ariaLabel?: string;
}
