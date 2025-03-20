import { cn } from '@/lib/shadcn/utils';
import { getPasswordStrengthColor } from '@/lib/utils/getPasswordStrengthColor';
import { FC } from 'react';

type Props = {
  strength: number;
};

/**
 * Password strength component
 *
 * @param strength - The strength of the password
 *
 * @returns {JSX.Element} - The password strength component
 */

export const PasswordStrength: FC<Props> = ({ strength }) => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className={cn(
          'h-full transition-all duration-300',
          getPasswordStrengthColor(strength)
        )}
        style={{ width: `${strength}%` }}
      />
    </div>
  );
};

PasswordStrength.displayName = 'PasswordStrength';
