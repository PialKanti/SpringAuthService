import { cva } from 'class-variance-authority';

// Define button styles with class-variance-authority (cva)
export const customButtonVariants = cva(
  [
    // layout
    'relative',
    'inline-flex',
    'gap-2',
    'items-center',
    'justify-center',
    'px-7',
    'py-2',
    'rounded-lg',
    'min-h-12',
    'lg:min-h-14',

    // Border
    'border',

    // Typo
    'text-[1rem]/[1.1]',
    'font-normal',

    // Animation
    'transition-colors',
    'duration-300',
    'ease-in-out',

    // focus
    'ring-offset-blue-500',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
  ],
  {
    variants: {
      // Button color variants
      colorScheme: {
        primary: '',
        secondary: '',
      },
      // Button appearance (fill or outline)
      variant: {
        fill: '',
        outline: '',
      },

      // Disabled state
      disabled: {
        true: ['pointer-events-none'],
        false: '',
      },
      // Loading state
      loading: {
        true: ['pointer-events-none', 'text-white'],
        false: '',
      },
    },

    // Styles when multiple variant conditions are met
    compoundVariants: [
      // Primary fill
      {
        colorScheme: 'primary',
        variant: 'fill',
        className: [
          'text-white',
          'bg-blue-500',
          'border-blue-500',
          'active:bg-blue-700',
          'active:border-blue-700',
          'hover:bg-blue-700',
          'hover:border-blue-700',
        ],
      },
      // loading
      {
        colorScheme: 'primary',
        variant: 'fill',
        loading: true,
        className: ['bg-blue-500', 'text-white'],
      },
      // diabled
      {
        colorScheme: 'primary',
        variant: 'fill',
        disabled: true,
        className: [
          // Normal
          'bg-blue-500 text-white',
          // Active
          'active:bg-blue-700',
          // Hover
          'hover:bg-blue-700',
        ],
      },

      // Primary outline
      {
        colorScheme: 'primary',
        variant: 'outline',
        className: [
          'border',
          'border-blue-500',
          'text-blue-500',
          'active:text-white',
          'active:bg-blue-700',
          'active:border-blue-700',
          'hover:text-white',
          'hover:bg-blue-700',
          'hover:border-blue-700',
        ],
      },
      // loading
      {
        colorScheme: 'primary',
        variant: 'outline',
        loading: true,
        className: ['bg-blue-500', 'text-white'],
      },
      // disabled
      {
        colorScheme: 'primary',
        variant: 'outline',
        disabled: true,
        className: [
          // Normal
          'border-blue-500 text-blue-500',
          // Active
          'active:border-blue-700 active:text-white active:bg-blue-700',
          // Hover
          'hover:border-blue-700 hover:text-white hover:bg-blue-700',
        ],
      },

      // Secondary fill
      {
        colorScheme: 'secondary',
        variant: 'fill',
        className: [
          'text-black',
          'bg-gray-200',
          'border-gray-200',
          'active:bg-gray-400',
          'active:border-gray-400',
          'hover:bg-gray-400',
          'hover:border-gray-400',
        ],
      },
      // Loading
      {
        colorScheme: 'secondary',
        variant: 'fill',
        loading: true,
        className: ['bg-slate-500', 'text-black'],
      },
      // disabled
      {
        colorScheme: 'secondary',
        variant: 'fill',
        disabled: true,
        className: [
          // Normal
          'text-black bg-gray-200',
          // Active
          'active:bg-gray-400',
          // Hover
          'hover:bg-gray-400',
        ],
      },

      // Secondary outline
      {
        colorScheme: 'secondary',
        variant: 'outline',
        className: [
          'border',
          'border-gray-200',
          'text-black',
          'active:bg-gray-400',
          'active:border-gray-400',
          'hover:text-black',
          'hover:bg-gray-400',
          'hover:border-gray-400',
        ],
      },
      // Loading
      {
        colorScheme: 'secondary',
        variant: 'outline',
        loading: true,
        className: ['bg-slate-500', 'text-black'],
      },
      // disabled
      {
        colorScheme: 'secondary',
        variant: 'outline',
        disabled: true,
        className: [
          // Normal
          'text-black border-gray-200',
          // Active
          'active:bg-gray-400 active:border-gray-400',
          // Hover
          'hover:bg-gray-400 hover:border-gray-400',
        ],
      },
    ],

    // Default variants for the button
    defaultVariants: {
      colorScheme: 'primary',
      variant: 'fill',
      disabled: false,
      loading: false,
    },
  }
);
