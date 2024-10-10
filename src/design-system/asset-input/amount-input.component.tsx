import React from 'react';

import { Box } from '../box';

import * as cx from './amount-input.css';
import { AmountInputAlignments } from './types';

interface Props {
  alignment?: AmountInputAlignments;
  onChange?: (value: string) => void;
  value?: string;
  id: string;
  testId?: string;
}

export const AmountInput = ({
  alignment = 'right',
  onChange,
  value,
  id,
  testId,
}: Readonly<Props>): JSX.Element => {
  return (
    <Box className={cx.amountInputSizer} data-value={value}>
      <input
        className={cx.amountInput[alignment]}
        value={value}
        size={1}
        onChange={({ target }): void => onChange?.(target.value)}
        placeholder="0.0"
        data-testid={testId ?? `asset-input-amount-input-${id}`}
      />
    </Box>
  );
};
