import { ICustomLink } from '../custom-link/interface';
import { ITextComponent } from './interface';

const ctaButtonProps: ICustomLink = {
  label: 'Button Label',
  href: 'https://example.com/',
  disabled: false,
  target: '_blank',
};

export const textComponentProps: ITextComponent = {
  overline: 'Headless Solution',
  title: 'Why headless architectures?',
  titleSize: 'h1',
  description:
    'Headless architectures separate the front-end and back-end of a website or application, allowing for greater flexibility and scalability. By decoupling the presentation layer from the content management system or e-commerce platform, businesses can create unique user experiences and leverage modern front-end frameworks while maintaining a secure and reliable back-end. At our organization, we specialize in developing headless solutions to help our clients stay ahead of the curve and deliver exceptional user experiences',
  descriptionSize: 'p1',
  buttons: Array(4).fill(ctaButtonProps),
  alignment: 'start',
  hasBottomSpacing: false,
};
