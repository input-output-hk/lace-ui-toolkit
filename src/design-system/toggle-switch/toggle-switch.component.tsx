import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import * as Switch from '@radix-ui/react-switch';

import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';

import * as cx from './toggle-switch.css';

type Props = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'children' | 'className'
> & {
  icon?: ReactNode;
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  id?: string;
  testId?: string;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
};

export const ToggleSwitch = ({
  label,
  id,
  icon,
  disabled,
  testId,
  checkedChildren,
  unCheckedChildren,
  checked,
  ...props
}: Readonly<Props>): JSX.Element => {
  return (
    <Flex
      alignItems="center"
      className={disabled === true ? cx.disabled : undefined}
    >
      <label
        className={cx.label}
        htmlFor={id}
        data-testid={testId + 'toggle-label'}
      >
        <Text.Body.Normal color="secondary">{label}</Text.Body.Normal>
      </label>
      {icon !== undefined && (
        <Box className={cx.iconContainer} testId={testId + 'toggle-icon'}>
          {icon}
        </Box>
      )}
      <Switch.Root
        {...props}
        checked={checked}
        disabled={disabled}
        className={cx.toogleSwitch}
        id={id}
        data-testid={testId + 'toggle-switch'}
      >
        <Switch.Thumb className={cx.thumb} />
        {checked && <span className={cx.checkedIcon}>{checkedChildren}</span>}
        {!checked && (
          <span className={cx.uncheckedIcon}>{unCheckedChildren}</span>
        )}
      </Switch.Root>
    </Flex>
  );
};
