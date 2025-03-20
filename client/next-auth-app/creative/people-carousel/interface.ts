import { ITextComponent } from '@/components/text-component/interface';
import { IImage } from '@/lib/types';

interface IPerson {
  img?: IImage;
  title: string;
  subTitle?: string;
  link: string;
}

export interface IPeopleCarousel {
  textComponent: ITextComponent;
  people: IPerson[];
}

export const PEOPLE_CAROUSEL_IMAGE_DIMENSIONS = {
  width: 640,
  height: 822,
};
