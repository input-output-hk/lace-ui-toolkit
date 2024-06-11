import React, { forwardRef } from 'react';

import { ItemIndicator } from './select-item-indicator.component';
import { ItemRoot } from './select-item-root.component';
import { ItemText } from './select-item-text.component';

import type { SelectItemPrivateProps } from './types';
import type { SelectVariant } from '../types';

/* public contract */
export interface SelectItemProps {
  value: string;
  title: string;
  description?: string;
  disabled?: boolean;
  variant?: SelectVariant;
  testId?: string;
}

export const Item = forwardRef<HTMLDivElement, SelectItemProps>(
  (
    {
      value,
      title,
      description,
      disabled,
      // This is a private prop, passed by the parent using `React.cloneElement()`
      variant,
      testId,
    }: Readonly<SelectItemPrivateProps & SelectItemProps>,
    forwardReference,
  ) => (
    <ItemRoot
      ref={forwardReference}
      value={value}
      disabled={disabled}
      variant={variant}
      testId={testId}
    >
      <ItemText title={title} description={description} />
      <ItemIndicator testId={`${testId ?? 'select'}-indicator`} />
    </ItemRoot>
  ),
);

Item.displayName = 'SelectItem';
