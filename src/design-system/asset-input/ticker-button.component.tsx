import React from 'react';

import ChevronRight from '@icons/ChevronRightComponent';

import { Flex } from '../flex';
import { Image } from '../profile-picture';
import { Text } from '../text';

import * as cx from './ticker-button.css';

interface Props {
  name: string;
  id: string;
  icon?: string;
  onClick?: () => void;
}

export const TickerButton = ({
  name,
  id,
  icon,
  onClick,
}: Readonly<Props>): JSX.Element => (
  <button
    className={cx.button}
    onClick={onClick}
    data-testid={`asset-input-ticker-button-${id}`}
  >
    <Flex alignItems="center" gap="$16">
      {icon && <Image imageSrc={icon} alt="Token" />}
      <Text.SubHeading weight="$bold">
        <Flex justifyContent="center" alignItems="center">
          <span>{name}</span>
          <ChevronRight className={cx.chevronIcon} />
        </Flex>
      </Text.SubHeading>
    </Flex>
  </button>
);
