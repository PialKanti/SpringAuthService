import { ISelectControl } from './interface';

export const selectControlProps: Omit<ISelectControl, 'onSelectChange'> = {
  name: 'Language',
  value: '',
  items: [
    {
      label: 'Select a language',
      value: '',
    },
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'C++',
      value: 'c++',
    },
    {
      label: 'Python',
      value: 'python',
    },
    {
      label: 'Javascript',
      value: 'javascript',
    },
  ],
  label: 'language',
  disabled: false,
  required: false,
  error: '',
  helperText: 'Helper Text',
  showErrorMsg: true,
};
