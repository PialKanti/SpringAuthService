'use client';

import { useId } from 'react';

/**
 * Custom hook for generating a unique ID with a custom prefix.
 * Utilizes the `useId` hook from the `react` library.
 *
 * @returns A unique ID with the format: `essential-ui-${id}`.
 */
export function useUniqueId(): string {
  /** Generates a unique ID using the `useId` hook. */
  const id: string = useId();

  // Combine the generated ID with a custom prefix.
  return `essential-ui-${id}`;
}
