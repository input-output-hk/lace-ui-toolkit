import React from 'react';

import { Flex } from '../flex';
import { Text } from '../text';
import { FontWeights } from '../text/create-text.util';

import * as cx from './assets-table-token-amount.css';

import type { TypographyVariants } from '../text/text.css';

interface Props {
  amount: string;
  details: string;
  detailsColor?: TypographyVariants['color'];
  detailsWeight?: FontWeights;
}

export const TokenAmount = ({
  amount,
  details,
  detailsColor = 'secondary',
  detailsWeight = '$regular',
}: Readonly<Props>): JSX.Element => {
  return (
    <Flex flexDirection="column" alignItems="flex-end" className={cx.container}>
      <Text.Body.Large weight="$semibold" data-testid="token-amount">
        {amount}
      </Text.Body.Large>
      <Text.Body.Normal color={detailsColor} weight={detailsWeight}>
        {details}
      </Text.Body.Normal>
    </Flex>
  );
};
