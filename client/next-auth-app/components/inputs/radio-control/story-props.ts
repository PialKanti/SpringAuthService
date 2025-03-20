import { IRadioControl } from './interface';

export const radioControlProps: Omit<IRadioControl, 'onRadioChange'> = {
  name: 'Radio',
  checked: false,
  disabled: false,
  required: false,
  error: false,
};
