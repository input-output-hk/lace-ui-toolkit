import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';

import ChevronRight from '@icons/ChevronRightThinComponent';
import EditComponent from '@icons/EditComponent';
import classNames from 'classnames';

import { Icon as IconButton } from '../control-buttons';
import { Flex } from '../flex';

import { WalletCard } from './profile-dropdown-wallet-card.component';
import * as cx from './profile-dropdown-wallet-option.css';

import type { ProfileType } from './profile-dropdown-wallet-card.component';
import type { WalletType } from './profile-dropdown.data';

export type Props = Omit<ComponentPropsWithoutRef<'button'>, 'type'> & {
  disabled?: boolean;
  title: string;
  subtitle?: string;
  profile?: ProfileType;
  type: WalletType;
  onOpenAccountsMenu?: () => void;
  onOpenEditWallet?: () => void;
};

export const WalletOption = ({
  id,
  disabled,
  className,
  title,
  subtitle,
  profile,
  type,
  onOpenAccountsMenu,
  onOpenEditWallet,
  ...props
}: Readonly<Props>): JSX.Element => {
  return (
    <button
      {...props}
      id={id}
      disabled={disabled}
      className={classNames(cx.button, cx.container, className)}
      data-testid="wallet-option-item"
    >
      <Flex alignItems="center" justifyContent="space-between" w="$fill">
        <WalletCard
          profile={profile}
          title={{
            text: title,
            type: 'content',
          }}
          subtitle={subtitle}
          type={type}
          testId="wallet-option"
        />
        <Flex ml="$10" gap="$4">
          {onOpenEditWallet && (
            <Flex w="$24" h="$24" alignItems="center" justifyContent="center">
              <IconButton
                onClick={(event): void => {
                  onOpenEditWallet?.();
                  event.stopPropagation();
                }}
                icon={<EditComponent />}
                size="extraSmall"
                as="div"
                testId="wallet-option-edit-wallet-button"
              />
            </Flex>
          )}
          {type !== 'shared' && onOpenAccountsMenu && (
            <Flex w="$24" h="$24" alignItems="center" justifyContent="center">
              <IconButton
                onClick={(event): void => {
                  onOpenAccountsMenu?.();
                  event.stopPropagation();
                }}
                icon={<ChevronRight />}
                size="extraSmall"
                as="div"
                testId="wallet-option-accounts-menu-button"
              />
            </Flex>
          )}
        </Flex>
      </Flex>
    </button>
  );
};
