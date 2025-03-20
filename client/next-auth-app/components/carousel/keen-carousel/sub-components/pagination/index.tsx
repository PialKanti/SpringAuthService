'use client';

import { cn } from '@/lib/shadcn/utils';
import { generateArrayFromNumber } from '../../utils';
import { IKeenCarouselPagination } from './interface';

export function KeenCarouselPagination({
  totalCount,
  onClick,
  currentSlide,
  paginationWrapperClassName,
  paginationBulletClassName,
  paginationBulletActiveClassName,
}: IKeenCarouselPagination) {
  return (
    <div
      className={cn(
        'mt-7 flex flex-wrap items-center justify-center gap-2 lg:mt-10',
        paginationWrapperClassName
      )}
      aria-label="Keen slider dot's"
    >
      {generateArrayFromNumber(totalCount).map((_, index) => {
        const isActive = currentSlide === index;
        return (
          <button
            aria-label="keen slider dot"
            key={index}
            onClick={() => {
              onClick(index);
            }}
            className={cn(
              // Layout
              'inline-flex h-2.5 w-2.5 cursor-pointer items-center justify-center rounded-full',
              // General
              'cursor-pointer bg-gray-300',
              // Animation
              'transition-all',
              // Border
              'border-[0.5px] border-solid border-gray-300',

              paginationBulletClassName,

              // Conditional classes
              isActive && [
                'cursor-default bg-blue-500',
                paginationBulletActiveClassName,
              ]
            )}
          ></button>
        );
      })}
    </div>
  );
}
