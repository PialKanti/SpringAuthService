import { cn } from '@/lib/shadcn/utils';
import { IInputHeading } from './interface';

/**
 * The `InputHeading` component is a flexible heading component that can
 * render either a `label` or a `legend` HTML element.
 *
 * @param label - The label of the component. This prop is required.
 * @param tagName - The type of the HTML element to render.
 * Can be either 'label' or 'legend'. This prop is required.
 *
 * Good to know:
 * Extract `tagName` prop to avoid setting non-global attributes directly on the tag.
 * HTML Global Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp
 *
 * @example
 * <InputHeading disabled={false} label="First Name" required={true} tagName="label" />
 */
export const InputHeading = ({
  disabled,
  label,
  required,
  className,
  ...props
}: IInputHeading) => {
  const inputHeadingClasses = cn(
    'text-sm font-normal text-black aria-disabled:text-gray-600',
    // Additional custom className (optional)
    className
  );

  if (props.tagName == 'legend') {
    return (
      <legend className={inputHeadingClasses} aria-disabled={disabled}>
        <InputHeadingContent
          disabled={disabled}
          label={label}
          required={required}
        />
      </legend>
    );
  } else {
    const { htmlFor } = props;
    return (
      <label
        className={inputHeadingClasses}
        aria-disabled={disabled}
        htmlFor={htmlFor}
      >
        <InputHeadingContent
          disabled={disabled}
          label={label}
          required={required}
        />
      </label>
    );
  }
};

/**
 * The `InputHeadingContent` component is a helper component used within the
 * `InputHeading` component to render the label text along with an optional
 * asterisk indicating if the input is required. This component is designed to
 * encapsulate the rendering logic for the label and required indicator,
 * ensuring consistency across different input heading styles.
 */
const InputHeadingContent = ({
  label,
  disabled,
  required,
}: Pick<IInputHeading, 'label' | 'required' | 'disabled'>) => {
  return (
    <>
      {label}{' '}
      {required && (
        <span
          aria-disabled={disabled}
          className="text-red-500 aria-disabled:text-red-500/50"
        >
          *
        </span>
      )}
    </>
  );
};
