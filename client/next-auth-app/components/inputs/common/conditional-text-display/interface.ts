export interface IConditionalTextDisplay {
  // Whether to display an error message
  showErrorMsg?: boolean;
  // Whether the component should be disabled
  disabled?: boolean;
  // Error message to display if showErrorMsg is true
  error?: string;
  // Helper text to display alongside the component
  helperText?: string;
  // CSS class name for styling the helper text
  helperTextClassName?: string;
}
