import type { PropsWithChildren } from 'react';
import React from 'react';

import * as Collapsible from '@radix-ui/react-collapsible';
import classNames from 'classnames';

import { Flex } from '../flex';
import { Text } from '../text';

import { Trigger } from './summary-expander-trigger.component';
import * as cx from './summary-expander.css';

import type { OmitClassName } from '../../types';

export type Props = OmitClassName<'button'> &
  PropsWithChildren<{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title: string;
    disabled?: boolean;
    testId?: string;
    plain?: boolean;
  }>;

export const SummaryExpander = ({
  open,
  onOpenChange,
  title,
  disabled,
  testId,
  children,
  plain = false,
  ...props
}: Readonly<Props>): JSX.Element => {
  return (
    <Collapsible.Root
      className={cx.root}
      open={open}
      onOpenChange={onOpenChange}
      disabled={disabled}
      data-testid={testId ?? 'expander'}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={classNames(cx.header, {
          [cx.expanded]: open,
          [cx.noBorder]: plain,
        })}
      >
        <Text.Body.Normal weight="$semibold" data-testid="expander-title">
          {title}
        </Text.Body.Normal>

        <Collapsible.Trigger asChild data-testid="expander-button">
          <Trigger open={open} disabled={disabled} {...props} />
        </Collapsible.Trigger>
      </Flex>

      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
