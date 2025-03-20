export interface ISwitchControl {
  /** The name of the switch control. */
  name: string;
  /** Specifies whether the switch is checked or not. */
  checked?: boolean;
  /** The unique identifier for the switch control. */
  id?: string;
  /** Specifies whether the switch control is disabled or not. */
  disabled?: boolean;
  /** Specifies whether the switch control has encountered an error state. */
  error?: boolean;
  /** Additional CSS classes to apply to the switch control. */
  className?: string;
  /** Specifies whether the switch control is required or not. */
  required?: boolean;
  /** Callback function triggered when the switch value changes. */
  onSwitchChange: (value: boolean) => void;
  /** Aria label for accessibility purposes. */
  ariaLabel?: string;
}
