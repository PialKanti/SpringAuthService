import { useUniqueId } from '@/hooks/unique-id';
import { ITextareaControl } from './interface';
import styles from '../common/styles/input-style.module.css';
import { InputHeading } from '../common/input-heading';
import { inputFieldCommonClassesGenerator } from '../common/styles';
import { cn } from '@/lib/shadcn/utils';
import { ConditionalTextDisplay } from '../common/conditional-text-display';

/** A flexible textarea component with built-in error handling and helper text.
 * It supports custom styling and is optimized for accessibility and usability.
 */
export function TextareaControl({
  name,
  value,
  onTextareaChange,
  onBlur,
  placeholder,
  label,
  required,
  disabled,
  showErrorMsg,
  error,
  helperText,
  className,
  labelClassName,
  helperTextClassName,
}: ITextareaControl) {
  const uniqueId = useUniqueId();
  const isValue = value?.toString().length > 0;
  const textareaClassName = cn(
    styles['default-form-input'],
    'resize-none min-h-[5rem] p-3',
    // Additional custom className (optional)
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
        <textarea
          name={name}
          value={value}
          onChange={onTextareaChange}
          onBlur={onBlur}
          placeholder={placeholder}
          id={uniqueId}
          required={required}
          disabled={disabled}
          className={inputFieldCommonClassesGenerator({
            className: textareaClassName,
            disabled: disabled,
            isError: !!error,
            isValue,
          })}
          aria-disabled={disabled}
          aria-required={required}
          aria-invalid={!!error}
        />
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
