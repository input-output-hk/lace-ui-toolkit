import React from 'react';

import { Box } from '../box';

import * as cx from './amount-input.css';
import { AmountInputAlignments } from './types';

interface Props {
  alignment?: AmountInputAlignments;
  onChange?: (value: string) => void;
  value?: string;
  id: string;
  'data-testid'?: string;
}

export const AmountInput = ({
  alignment = 'right',
  onChange,
  value,
  id,
  ...rest
}: Readonly<Props>): JSX.Element => {
  const dataTestId = rest['data-testid'];
  return (
    <Box className={cx.amountInputSizer} data-value={value}>
      <input
        className={cx.amountInput[alignment]}
        value={value}
        size={1}
        onChange={({ target }): void => onChange?.(target.value)}
        placeholder="0.0"
        data-testid={dataTestId ? dataTestId : `asset-input-amount-input-${id}`}
      />
    </Box>
  );
};
