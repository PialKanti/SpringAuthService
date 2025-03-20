import React from 'react';
import clsx from 'clsx';
import '../app/globals.css';
import { primary } from '../fonts';
import { Toaster } from '../components/ui/sonner';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { fontFamily } from 'tailwindcss/defaultTheme';

const preview: Preview = {
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: 'fullscreen',
  },

  decorators: [
    (Story) => {
      // Sets font-family and font variables
      // If font is not found then
      // check variable names in font folder and tailwind-config
      if (document) {
        document.body.style.setProperty(
          '--font-primary',
          primary.style.fontFamily
        );
        document.body.style.fontFamily = `var(--font-primary), ${fontFamily.sans}`;
      }

      return (
        <div className={clsx('font-primary', primary.variable)}>
          <Story />
          <Toaster />
        </div>
      );
    },
  ],
};

export default preview;
