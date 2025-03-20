import { cn } from '@/lib/shadcn/utils';
import { IconStore } from '@/components/icon-store';
import { IInputControl } from '../../interface';

interface IProps
  extends Pick<IInputControl, 'disabled' | 'type' | 'className'> {
  onIconClick: () => void;
}

export const PasswordControl = ({
  type,
  disabled,
  onIconClick,
  className,
}: IProps) => {
  return (
    <button
      className={cn(
        'absolute right-3 top-1/3 grid h-fit w-fit cursor-pointer select-none text-black disabled:cursor-default disabled:text-gray-300',
        className
      )}
      onClick={onIconClick}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
      role="switch"
      aria-checked={type == 'password' ? true : false}
      aria-label={`${type == 'password' ? 'Show' : 'Hide'} Password`}
    >
      <IconStore
        iconName={type == 'password' ? 'view' : 'hide'}
        className="h-fit w-fit text-inherit"
      />
    </button>
  );
};
