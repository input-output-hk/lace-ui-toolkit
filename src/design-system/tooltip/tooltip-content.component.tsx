import React from 'react';
import type { ReactNode } from 'react';

import cn from 'classnames';

import { Text } from '../text';

import * as cx from './tooltip-content.css';

export interface TooltipContentProps {
  label: ReactNode | string;
  preventTextWrap?: boolean;
}

export const TooltipContent = ({
  label,
  preventTextWrap = false,
}: Readonly<TooltipContentProps>): JSX.Element => {
  return (
    <div
      className={cn(cx.tooltipContent, {
        [cx.preventTextWrap]: preventTextWrap,
      })}
    >
      <Text.Body.Small color="secondary" weight="$medium">
        {label}
      </Text.Body.Small>
    </div>
  );
};
