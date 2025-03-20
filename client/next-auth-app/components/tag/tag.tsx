import { cn } from '@/lib/shadcn/utils';
import { ITag } from './interface';

/**
 * A reusable tag component for displaying labels such as blog tags or image
 * tags. This component is designed to be flexible and can be styled with
 * additional CSS classes.
 *
 * @example
 * // Usage example
 * <Tag label="React" />
 */
export const Tag = ({ label, className }: ITag) => {
  return (
    <span
      className={cn(
        'cursor-pointer rounded-md bg-slate-200 px-3 py-2 text-gray-900 transition-all duration-300 hover:bg-slate-300 hover:text-gray-950',
        className
      )}
    >
      {label}
    </span>
  );
};
