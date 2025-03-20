'use client';

import { useState } from 'react';
import { IInputControl } from './interface';
import { IconStore } from '../../icon-store';
import styles from '../common/styles/input-style.module.css';
import { PasswordControl } from './sub-components/password-contol';
import { cn } from '@/lib/shadcn/utils';
import { useUniqueId } from '@/hooks/unique-id';
import { inputFieldCommonClassesGenerator } from '../common/styles';
import { InputHeading } from '../common/input-heading';
import { ConditionalTextDisplay } from '../common/conditional-text-display';

/** A flexible input component designed for various input types with built-in
 * error handling, helper text, and password visibility toggle. It supports
 * custom styling and is optimized for accessibility and usability.
 */
export function InputControl({
  name,
  type,
  required,
  disabled,
  autoComplete,
  error,
  showSuccessIcon,
  value,
  onInputChange,
  onBlur,
  className,
  placeholder,
  label,
  labelClassName,
  helperText,
  helperTextClassName,
  showErrorMsg,
}: IInputControl) {
  const [inputType, setInputType] = useState<IInputControl['type']>(type);
  const uniqueId = useUniqueId();
  const isValue = value?.toString().length > 0;

  // Toggle password visibility
  const handlePasswordView = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  // Generate the class name for the input field
  const inputClassName = cn(
    styles['default-form-input'],
    styles['hide-input-appearance'],
    // Add right padding (pr-9) when the icon is shown on the right side.
    isValue && type === 'password' && 'pr-9',
    showSuccessIcon && type !== 'password' && 'pr-9',
    className
  );

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="relative flex w-full flex-col gap-1">
        {label && (
          <InputHeading
            htmlFor={uniqueId}
            label={label}
            required={required}
            disabled={disabled}
            className={labelClassName}
            tagName="label"
          />
        )}
        <input
          name={name}
          value={value}
          onChange={onInputChange}
          onBlur={onBlur}
          placeholder={placeholder}
          id={uniqueId}
          required={required}
          disabled={disabled}
          type={type == 'password' ? inputType : type}
          autoComplete={autoComplete ? 'on' : 'off'}
          className={inputFieldCommonClassesGenerator({
            className: inputClassName,
            disabled: disabled,
            isError: !!error,
            isValue,
          })}
          aria-disabled={disabled}
          aria-required={required}
          aria-invalid={!!error}
        />
        {/* Password view and hide control component */}
        {type == 'password' && isValue && (
          <PasswordControl
            type={inputType}
            disabled={disabled}
            className={cn(label ? 'top-[55%]' : 'top-[35%]')}
            onIconClick={handlePasswordView}
          />
        )}
        {/* Input success icon */}
        {type != 'password' && showSuccessIcon && (
          <IconStore
            iconName="tick"
            className={cn(
              'absolute right-3 top-1/2 cursor-default text-lg leading-none text-green-500',
              label ? 'top-[53%]' : 'top-[30%]'
            )}
          />
        )}
      </div>
      <ConditionalTextDisplay
        error={error}
        helperText={helperText}
        showErrorMsg={showErrorMsg}
        disabled={disabled}
        helperTextClassName={helperTextClassName}
      />
    </div>
  );
}
