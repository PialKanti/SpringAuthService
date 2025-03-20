import { ICheckboxControl } from './interface';

export const checkboxControlProps: Omit<ICheckboxControl, 'onCheckboxChange'> =
  {
    name: 'Checkbox',
    checked: false,
    disabled: false,
    required: false,
    error: false,
  };
