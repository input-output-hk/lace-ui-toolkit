import React from 'react';

import { Flex } from '../flex';
import { Text } from '../text';

import * as cx from './profile-dropdown-wallet-status.css';

export interface Props {
  status: 'error' | 'synced' | 'syncing';
  label: string;
  type?: 'button' | 'flat';
}

export const WalletStatus = ({
  label,
  status,
  type = 'button',
}: Readonly<Props>): JSX.Element => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      py="$8"
      px="$12"
      className={type === 'button' ? cx.button : cx.flat}
    >
      <Flex
        className={cx.icon({
          bg: status,
        })}
        w="$10"
        h="$10"
        alignItems="center"
        justifyContent="center"
        mr="$8"
      />
      <Text.Label color="secondary" weight="$medium">
        {label}
      </Text.Label>
    </Flex>
  );
};
