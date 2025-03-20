import { IImage } from '@/lib/types';

export interface ICard {
  /** The title of the blog post or content. */
  title: string;
  /** The author of the blog post or content. */
  author: string;
  /** The publication date of the blog post or content. */
  date: string;
  /** The main content of the blog post or content. */
  content: string;
  /** Information about the image associated with the blog post or content. */
  image: IImage;
}

export const EXAMPLE_CARD_IMAGE_DIMENSION_1_1 = {
  width: 500,
  height: 500,
};
