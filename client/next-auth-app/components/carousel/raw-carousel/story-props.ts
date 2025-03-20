import { IRawCarousel, ITEMS_PER_SLIDE, ITEM_GAP } from './interface';

export const rawCarouselCardProps = [
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d3_fwm01r.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d1_h6lni3.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Travis Michael Head',
    description:
      'A talented, aggressive left-hand batter earmarked for big things at a young age, it was Travis Heads second coming as an international cricketer where his career really took off.',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d4_tt9zuc.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d2_ygqo12.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d3_fwm01r.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Andre Dwayne Russell',
    description:
      'Andre Russell made his IPL debut in 2012, for Delhi Daredevils (now Capitals). He played seven matches across two seasons without doing much of note.',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d1_h6lni3.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d1_h6lni3.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d2_ygqo12.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
  {
    image: {
      src: 'https://res.cloudinary.com/dqjhlnnna/image/upload/v1714634019/sickboi/carousel/d3_fwm01r.jpg',
      alt: 'slide',
      lqip: ' ',
      width: 340,
      height: 515,
    },
    title: 'Jake Riordan',
    description: 'Developer',
  },
];

export const rawCarouselProps: Omit<IRawCarousel, 'children'> = {
  itemPerSlide: ITEMS_PER_SLIDE,
  itemGap: ITEM_GAP,
  hasNavigation: true,
};

export const rawCarouselWithOffsetProps: Omit<IRawCarousel, 'children'> = {
  ...rawCarouselProps,
  haveOffset: true,
};
