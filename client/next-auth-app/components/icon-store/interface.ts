const iconTick = ['tick'] as const;
const iconView = ['view', 'hide'] as const;
const iconSpinner = ['spinner-circle'] as const;
const iconChevron = ['chevron-down', 'chevron-left', 'chevron-right'] as const;
const iconMenu = ['menu'] as const;
const iconClose = ['close'] as const;

export const icons = [
  ...iconTick,
  ...iconView,
  ...iconSpinner,
  ...iconChevron,
  ...iconMenu,
  ...iconClose,
];

export type IconName = (typeof icons)[number];

export interface IIconStore {
  /**
   * Specifies the name of the icon to be displayed.
   */
  iconName: IconName;
  className?: string;
}
