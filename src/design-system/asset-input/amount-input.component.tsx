import React from 'react';

import cn from 'classnames';

import { Box } from '../box';

import * as cx from './amount-input.css';
import { AmountInputAlignments } from './types';

interface Props {
  alignment?: AmountInputAlignments;
  onChange?: (value: string) => void;
  value?: string;
  id: string;
  testId?: string;
  className?: string;
  inputClassName?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const AmountInput = ({
  alignment = 'right',
  onChange,
  value,
  id,
  testId,
  className,
  inputClassName,
  onBlur,
}: Readonly<Props>): JSX.Element => {
  return (
    <Box className={cn(cx.amountInputSizer, className)} data-value={value}>
      <input
        className={cn(cx.amountInput[alignment], inputClassName)}
        value={value}
        size={1}
        onChange={({ target }): void => onChange?.(target.value)}
        placeholder="0.0"
        data-testid={testId ?? `asset-input-amount-input-${id}`}
        onBlur={onBlur}
      />
    </Box>
  );
};
