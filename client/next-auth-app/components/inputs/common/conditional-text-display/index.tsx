import { cn } from '@/lib/shadcn/utils';
import { IConditionalTextDisplay } from './interface';
import { Typography } from '@/components/typography';

/**
 * `ConditionalTextDisplay` is a component designed to encapsulate the
 * `Typography` component. It serves the purpose of dynamically rendering either
 * an `errorText` or a `helperText`, depending on specific conditions.
 */
export const ConditionalTextDisplay = ({
  disabled,
  showErrorMsg,
  helperText,
  helperTextClassName,
  error,
}: IConditionalTextDisplay) => {
  return (
    <>
      {/*If showErrorMsg is true, there's an error, and the component is not disabled it 
      will render the error message else it will render the helperText.*/}
      {showErrorMsg && !!error && !disabled ? (
        <Typography size="c1" className="text-red-500">
          {error}
        </Typography>
      ) : (
        !!helperText && (
          <Typography
            size="c1"
            className={cn('text-gray-600', helperTextClassName)}
          >
            {helperText}
          </Typography>
        )
      )}
    </>
  );
};
