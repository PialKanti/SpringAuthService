interface ICommonInputHeading {
  /** The label text for the input heading. */
  label: string;
  /** Whether the input is disabled.*/
  disabled?: boolean;
  /** Whether the input is required. */
  required?: boolean;
  /** Additional CSS classes for the input heading. */
  className?: string;
}

interface IInputLabel extends ICommonInputHeading {
  /** The HTML tag name for the input label. */
  tagName: 'label';
  /** The 'htmlFor' attribute of the label, associating it with a form control. */
  htmlFor?: string;
}

interface IInputLegend extends ICommonInputHeading {
  /** The HTML tag name for the input legend. */
  tagName: 'legend';
}

export type IInputHeading = IInputLabel | IInputLegend;
