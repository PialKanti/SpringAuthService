import { IIconStore } from './interface';
import { ChevronDown } from './sub-components/chevron-down';
import { ChevronLeft } from './sub-components/chevron-left';
import { ChevronRight } from './sub-components/chevron-right';
import { Close } from './sub-components/close';
import { Hide } from './sub-components/hide';
import { Menu } from './sub-components/menu';
import { SpinnerCircle } from './sub-components/spinner-circle';
import { Tick } from './sub-components/tick';
import { View } from './sub-components/view';
import { cn } from '@/lib/shadcn/utils';

interface IIcon {
  iconName: IIconStore['iconName'];
}

/**
 * Renders a specific icon based on the given icon name.
 * @param {IIcon} props - The props containing the icon name.
 * @returns {JSX.Element} - The rendered icon.
 */
function Icon({ iconName }: IIcon): JSX.Element {
  switch (iconName) {
    case 'tick': {
      return <Tick />;
    }
    case 'view': {
      return <View />;
    }
    case 'hide': {
      return <Hide />;
    }
    case 'spinner-circle': {
      return <SpinnerCircle />;
    }
    case 'chevron-down': {
      return <ChevronDown />;
    }
    case 'chevron-left': {
      return <ChevronLeft />;
    }
    case 'chevron-right': {
      return <ChevronRight />;
    }
    case 'menu': {
      return <Menu />;
    }
    case 'close': {
      return <Close />;
    }
    default:
      /**
       * If you see an error here, it means you have
       * updated the `IconNames` type but you have not updated this switch case
       */
      const unreachable: never = iconName;
      throw `Unregistered Icon: ${unreachable}`;
  }
}

/**
 * Renders an icon component with specified properties.
 * @param {IIconStore} props - The props for the icon component.
 * @returns {JSX.Element} - The rendered icon component.
 */
export function IconStore({ iconName, className }: IIconStore): JSX.Element {
  return (
    <span className={cn('inline-grid leading-none text-inherit', className)}>
      <Icon iconName={iconName} />
    </span>
  );
}
