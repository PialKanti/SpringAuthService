import { ICustomButton, IFormButton, IInlineButton } from './interface';

export const commonButtonProps: Omit<ICustomButton, 'onButtonClick' | 'type'> =
  {
    children: 'Button Label',
    colorScheme: 'primary',
    variant: 'fill',
    disabled: false,
  };

export const normalButtonProps: ICustomButton = {
  ...commonButtonProps,
  type: 'action',
  onButtonClick: () => alert('Hi, i am clicked!'),
};

export const normalButtonLoadingProps: ICustomButton = {
  ...normalButtonProps,
  loading: true,
};

export const linkButtonProps: ICustomButton = {
  type: 'link',
  children: 'Link',
  colorScheme: 'primary',
  variant: 'fill',
  disabled: false,
  href: 'https://www.lemonhive.com/',
  target: '_blank',
};

export const formButtonProps: IFormButton = {
  ...commonButtonProps,
  type: 'submit',
};

export const inlineButtonProps: IInlineButton = {
  ...commonButtonProps,
  type: 'inline',
};
