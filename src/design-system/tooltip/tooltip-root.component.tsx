import React from 'react';
import type { ReactNode } from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';

import { TooltipContent } from './tooltip-content.component';

export type Props = typeof Tooltip.Root & {
  align?: Tooltip.TooltipContentProps['align'];
  children?: Tooltip.TooltipContentProps['children'];
  side?: Tooltip.TooltipContentProps['side'];
  label: ReactNode | string;
  zIndex?: number;
  preventTextWrap?: boolean;
};

export const Root = ({
  label,
  side = 'top',
  align = 'center',
  zIndex,
  children,
  preventTextWrap = false,
}: Readonly<Props>): JSX.Element => {
  return (
    <Tooltip.Root>
      {children}
      <Tooltip.Portal>
        <Tooltip.Content
          style={{ zIndex }}
          side={side}
          align={align}
          data-testid={'tooltip-content'}
        >
          <TooltipContent label={label} preventTextWrap={preventTextWrap} />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
