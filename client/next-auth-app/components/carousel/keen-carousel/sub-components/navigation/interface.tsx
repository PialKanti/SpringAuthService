import { IconName } from '@/components/icon-store/interface';

export interface IKeenCarouselNavigationButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  iconName: Extract<IconName, 'chevron-left' | 'chevron-right'>;
  className?: string;
}
