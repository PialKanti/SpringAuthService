import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';

export interface IImage {
  /** Specifies the path to the image */
  src: string;
  /** Specifies an alternate text for an image */
  alt?: string;
  /**
   * A Data URL to be used as a placeholder image before the src image successfully loads
   * Must be a base64-encoded image. Must be used as the `blurDataURL` prop in Next Image
   */
  lqip: string;
  /** Specifies the width of an image */
  width?: number;
  /** Specifies the height of an image */
  height?: number;
}

export const STORYBOOK_IMAGE_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUH/8QAIxAAAQQBAwQDAAAAAAAAAAAAAQACAwQxBREhEhMVcUFRYf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABgRAQEAAwAAAAAAAAAAAAAAAAABESFR/9oADAMBAAIRAxEAPwDi9aGxoMxdahkdVcMfAJwl6hZ8tcrRVIyRl7SOD+elLWblh1SSJ0rzGdt2k/SytKmkika6Nxa7bIQ3hsvTLVTosSDtAc4bgIVp00jnEl3PoISir//Z';

export interface PageParams {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

/**
 * A union type for server action response.
 *
 * This improves the developer experience, we know that if
 * a server action is successfull then we will have a valid data
 * object.
 *
 * We should not have to check for isSuccess and data.
 */
interface IServerActionSuccess<T> {
  isSuccess: true;
  data: T;
  message: string;
}

interface IServerActionFailure {
  success: false;
  data: null;
  message: string;
}

export type ServerActionResponse<T> =
  | IServerActionSuccess<T>
  | IServerActionFailure;

export const SCREENS = resolveConfig(tailwindConfig).theme.screens;

export type Breakpoints = Record<keyof typeof SCREENS | 'initial', number>;
