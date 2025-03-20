import { STORYBOOK_IMAGE_BLUR_DATA_URL } from '@/lib/types';
import { ICard } from './interface';

export const cardProps: ICard = {
  title: 'The Impact of Climate Change on Biodiversity',
  author: 'Environmental Expert',
  content:
    'Climate change is having a profound impact on biodiversity worldwide. Rising temperatures, extreme weather events, and changing ecosystems pose significant challenges to various species. This blog explores the current state of biodiversity in the context of climate change and discusses potential solutions to mitigate its effects.',
  date: '15th February, 2024',
  image: {
    src: 'https://res.cloudinary.com/dezqxmlny/image/upload/v1708840928/Starter/Mask_group_wqgzwj.png',
    alt: 'Climate Change art',
    lqip: STORYBOOK_IMAGE_BLUR_DATA_URL,
  },
};
