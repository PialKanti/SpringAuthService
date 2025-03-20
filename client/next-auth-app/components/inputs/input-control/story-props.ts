import { IInputControl } from './interface';

export const inputControlProps: Omit<IInputControl, 'onInputChange'> = {
  value: 'Test',
  name: 'example',
  type: 'text',
  placeholder: 'Placeholder',
  label: 'Input Label',
  autoComplete: 'on',
  required: true,
  disabled: false,
  showErrorMsg: true,
  helperText: 'Helper text',
  showSuccessIcon: false,
};
