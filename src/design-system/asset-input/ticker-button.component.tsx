import React from 'react';

import ChevronRight from '@icons/ChevronRightComponent';

import { Flex } from '../flex';
import { Text } from '../text';

import * as cx from './ticker-button.css';

interface Props {
  name: string;
  id: string;
  onClick?: () => void;
}

export const TickerButton = ({
  name,
  id,
  onClick,
}: Readonly<Props>): JSX.Element => (
  <button
    className={cx.button}
    onClick={onClick}
    data-testid={`asset-input-ticker-button-${id}`}
  >
    <Text.SubHeading weight="$bold">
      <Flex justifyContent="center" alignItems="center">
        {name}
        <ChevronRight className={cx.chevronIcon} />
      </Flex>
    </Text.SubHeading>
  </button>
);
