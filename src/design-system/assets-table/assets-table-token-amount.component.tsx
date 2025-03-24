import React, { ReactNode } from 'react';

import { Flex } from '../flex';
import { Text } from '../text';
import { FontWeights } from '../text/create-text.util';
import { Tooltip } from '../tooltip';

import * as cx from './assets-table-token-amount.css';

import type { TypographyVariants } from '../text/text.css';

interface Props {
  amount: string;
  details: ReactNode;
  detailsColor?: TypographyVariants['color'];
  detailsWeight?: FontWeights;
  detailsTooltip?: string;
}

export const TokenAmount = ({
  amount,
  details,
  detailsColor = 'secondary',
  detailsWeight = '$regular',
  detailsTooltip,
}: Readonly<Props>): JSX.Element => {
  return (
    <Flex flexDirection="column" alignItems="flex-end" className={cx.container}>
      <Text.Body.Large weight="$semibold" data-testid="token-amount">
        {amount}
      </Text.Body.Large>
      <Text.Body.Normal color={detailsColor} weight={detailsWeight}>
        {detailsTooltip ? (
          <Tooltip label={detailsTooltip}>{details}</Tooltip>
        ) : (
          details
        )}
      </Text.Body.Normal>
    </Flex>
  );
};
