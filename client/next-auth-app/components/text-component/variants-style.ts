import { cva } from 'class-variance-authority';

export const textComponentVariants = cva('text-black [&_.para]:text-gray-800', {
  variants: {
    alignment: {
      start: [
        // Text alignment
        'text-left',
        // buttons alignment
        '[&_.buttons-wrapper]:ml-auto [&_.buttons-wrapper]:justify-start',
      ],
      center: [
        // Text alignment
        'text-center',
        // Buttons alignment
        '[&_.buttons-wrapper]:mx-auto [&_.buttons-wrapper]:justify-center',
      ],
      end: [
        // Text alignment
        'text-end',
        // Buttons alignment
        '[&_.buttons-wrapper]:mr-auto [&_.buttons-wrapper]:justify-end',
      ],
    },
  },
  defaultVariants: {
    alignment: 'start',
  },
});
