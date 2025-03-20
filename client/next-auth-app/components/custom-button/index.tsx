'use client';

import { Fragment, PropsWithChildren } from 'react';
import {
  IActionButton,
  ICustomButton,
  IFormButton,
  IInlineButton,
  ILinkButton,
} from './interface';
import { cn } from '@/lib/shadcn/utils';
import Link from 'next/link';
import { customButtonVariants } from './variants-style';
import styles from './custom-button.module.css';

/**
 * A flexible and customizable button component that can render different
 * types of buttons based on the provided props. It supports various button
 * types including link, action, form submission (reset and submit), and
 * inline buttons. This component is designed to be highly customizable with
 * CSS classes and styles, and can display a loading state.
 *
 * @example
 * <CustomButton type="action">
 *   Click Me
 * </CustomButton>
 *
 * @example
 * Here the CustomButton return a span tag with button design and the
 * SheetTrigger return a button with sheet functionality
 *
 * <SheetTrigger>
 *  <CustomButton type="inline">Click Me</CustomButton>
 * </SheetTrigger>
 */
export const CustomButton = (props: ICustomButton) => {
  const buttonClasses = cn(
    customButtonVariants({
      colorScheme: props.colorScheme,
      variant: props.variant,
      disabled: props.disabled,
      loading:
        props.type !== 'link' && props.type !== 'inline' && props.loading,
    }),
    props.className
  );

  switch (props.type) {
    case 'link':
      return <CustomLinkButton {...props} buttonClasses={buttonClasses} />;
    case 'button':
    case 'submit':
    case 'reset':
      return <CustomFormButton {...props} buttonClasses={buttonClasses} />;
    case 'action':
      return <CustomActionButton {...props} buttonClasses={buttonClasses} />;
    case 'inline':
      return <CustomInlineButton {...props} buttonClasses={buttonClasses} />;
    default:
      return <Fragment></Fragment>;
  }
};

/**
 * @Component
 * @SubComponent
 * A component that displays a loading state alongside its children.
 * It's useful for showing a loading indicator while content is being
 * fetched or processed.
 */
const ButtonWithLoading = ({ children }: PropsWithChildren) => {
  return (
    <>
      <span className="btn-text opacity-0">{children}</span>
      <span className="absolute">
        <span className={styles['dot-typing']}></span>
      </span>
    </>
  );
};

/**
 * @Interface
 * @SubComponent
 * Extends the `ILinkButton` interface with additional properties specific
 * to link buttons.
 * This interface is used by the `CustomLinkButton` sub-component.
 */
interface ICustomLinkButton extends ILinkButton {
  /** Additional CSS classes to apply to the link button */
  buttonClasses: string;
}

/**
 * @Component
 * @SubComponent
 * A custom link button component that wraps the Next.js Link component.
 * It's designed to be used with Next.js for navigation within a React
 * application.
 */
const CustomLinkButton = ({
  disabled,
  href,
  ariaLabel,
  children,
  prefetch,
  target,
  buttonClasses,
}: ICustomLinkButton) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      prefetch={prefetch}
      target={target}
      className={buttonClasses}
      aria-disabled={disabled}
    >
      {children}
    </Link>
  );
};

/**
 * @Interface
 * @SubComponent
 * Extends the `IActionButton` interface with additional properties specific
 * to action buttons.
 * This interface is used by the `CustomActionButton` sub-component.
 */
interface ICustomActionButton extends IActionButton {
  /** Additional CSS classes for the button */
  buttonClasses: string;
}

/**
 * @Component
 * @SubComponent
 * A custom action button component that extends the functionality of a
 * standard button.
 * It supports loading states and custom styling through additional CSS classes.
 */
const CustomActionButton = ({
  disabled,
  onButtonClick,
  ariaLabel,
  loading,
  buttonClasses,
  children,
}: ICustomActionButton) => {
  return (
    <button
      onClick={onButtonClick}
      className={buttonClasses}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {loading ? <ButtonWithLoading>{children}</ButtonWithLoading> : children}
    </button>
  );
};

/**
 * @Interface
 * @SubComponent
 * Interface for the props of the `CustomFormButton` component.
 * Extends the `IFormButton` interface with additional properties
 * specific to form buttons.
 */
interface ICustomFormButton extends IFormButton {
  /** Additional CSS classes for the button */
  buttonClasses: string;
}

/**
 * @Component
 * @SubComponent
 * A custom form button component that extends the functionality of a
 * standard button. It supports loading states and custom styling through
 * additional CSS classes. This component is used for form submission and
 * reset buttons.
 */
const CustomFormButton = ({
  disabled,
  ariaLabel,
  loading,
  buttonClasses,
  children,
  type,
  onButtonClick,
}: ICustomFormButton) => {
  return (
    <button
      className={buttonClasses}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
      onClick={onButtonClick}
    >
      {loading ? <ButtonWithLoading>{children}</ButtonWithLoading> : children}
    </button>
  );
};

/**
 * @Interface
 * @SubComponent
 * Interface for the props of the `CustomInlineButton` component.
 * Extends the `IInlineButton` interface with additional properties
 * specific to inline buttons.
 */
interface ICustomInlineButton extends IInlineButton {
  /** Additional CSS classes for the button */
  buttonClasses: string;
}

/**
 * @Component
 * @SubComponent
 * A custom inline button component that extends the design of a
 * standard button. It supports custom styling through additional CSS
 * classes. This component is used for inline actions within the UI.
 */
const CustomInlineButton = ({
  disabled,
  ariaLabel,
  buttonClasses,
  children,
}: ICustomInlineButton) => {
  return (
    <span
      className={cn('cursor-pointer', buttonClasses)}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </span>
  );
};
