import { ITextareaControl } from './interface';

export const textareaControlProps: Omit<ITextareaControl, 'onTextareaChange'> =
  {
    value: 'Test',
    name: 'example',
    placeholder: 'Placeholder',
    label: 'Input Label',
    required: true,
    disabled: false,
    showErrorMsg: true,
    helperText: 'Helper text',
  };
