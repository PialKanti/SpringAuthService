import { CustomButton } from '../custom-button';
import { ITextComponent } from './interface';
import { Typography } from '../typography';
import React from 'react';
import { cn } from '@/lib/shadcn/utils';
import { textComponentVariants } from './variants-style';

/**
 * This component renders a text section with `overline`, `title`,
 * `description` and `link buttons`. It has styling options for alignment.
 * @param ITextComponent
 * @returns JSX.Element
 */
export function TextComponent({
  overline,
  title,
  titleSize,
  titleTagName,
  description,
  descriptionSize,
  buttons,
  alignment,
  hasBottomSpacing,
  className,
}: ITextComponent) {
  const wrapperClasses = cn(
    // Variants
    textComponentVariants({
      alignment,
    }),

    // Bottom Spacing
    hasBottomSpacing && 'mb-7 lg:mb-10',
    className
  );

  return (
    <div className={wrapperClasses}>
      {overline && (
        <Typography size="o1" className="mb-2">
          {overline}
        </Typography>
      )}
      <Typography size={titleSize} tagName={titleTagName}>
        {title}
      </Typography>
      {description && (
        <Typography
          size={descriptionSize ? descriptionSize : 'p1'}
          className="para mt-3"
        >
          {description}
        </Typography>
      )}

      {buttons && buttons.length > 0 && (
        <div
          className={
            'buttons-wrapper mt-7 inline-flex max-w-[400px] flex-wrap gap-2'
          }
        >
          {buttons.map((button, index) => (
            <CustomButton
              key={index}
              type="link"
              {...button}
              colorScheme="primary"
              variant="fill"
            >
              {button.label}
            </CustomButton>
          ))}
        </div>
      )}
    </div>
  );
}
