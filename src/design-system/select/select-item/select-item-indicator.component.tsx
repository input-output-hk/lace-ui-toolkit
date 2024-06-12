import React, { forwardRef } from 'react';

import CheckIcon from '@icons/CheckComponent';
import * as Select from '@radix-ui/react-select';

import * as cx from './select-item-indicator.css';

export interface SelectItemIndicatorProps {
  testId?: string;
}

/**
 * https://www.radix-ui.com/primitives/docs/components/select#itemindicator
 */
export const ItemIndicator = forwardRef<
  HTMLSpanElement,
  SelectItemIndicatorProps
>(({ testId }, forwardReference) => (
  <Select.ItemIndicator
    ref={forwardReference}
    className={cx.indicator}
    data-testid={testId}
  >
    <CheckIcon />
  </Select.ItemIndicator>
));

ItemIndicator.displayName = 'ItemIndicator';
