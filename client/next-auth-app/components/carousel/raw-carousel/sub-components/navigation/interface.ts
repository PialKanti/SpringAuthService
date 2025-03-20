import { IconName } from '@/components/icon-store/interface';
export interface IRawCarouselNavigation {
  onClick: (e: React.MouseEvent) => void;
  iconName: Extract<IconName, 'chevron-left' | 'chevron-right'>;
  className?: string;
}
