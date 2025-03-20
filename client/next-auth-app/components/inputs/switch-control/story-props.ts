import { ISwitchControl } from './interface';

export const switchControlProps: Omit<ISwitchControl, 'onSwitchChange'> = {
  name: 'Switch-1',
  checked: false,
  id: 'switch-1',
  disabled: false,
  required: false,
  error: false,
};
