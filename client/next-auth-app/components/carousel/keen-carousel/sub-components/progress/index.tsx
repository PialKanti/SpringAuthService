import { cn } from '@/lib/shadcn/utils';
import { ICarouselProgressBar } from './interface';

export function KeenCarouselProgressBar({
  progress,
  progressWrapperClassName,
  progressCompleteBarClassName,
}: ICarouselProgressBar) {
  return (
    <div
      className={cn(
        'relative mt-7 h-1 overflow-hidden rounded-full bg-gray-300 lg:mt-10',
        progressWrapperClassName
      )}
    >
      <span
        className={cn(
          'absolute inset-0 z-[1] origin-left rounded-[inherit] bg-blue-500 transition-[width] duration-500',
          progressCompleteBarClassName
        )}
        style={{
          width: `${progress * 100}%`,
        }}
        aria-valuenow={Number(progress * 100)}
        aria-labelledby="keen carousel progress label"
      ></span>
    </div>
  );
}
