import type { ReactNode } from 'react';
import React from 'react';

import { Box } from '../box';
import { CallToAction } from '../buttons';
import { Flex } from '../flex';
import { Text } from '../text';

import * as cx from './info-bar.css';

export interface Props {
  message: ReactNode;
  icon: ReactNode;
  callToAction?: {
    label?: string;
    onClick?: () => void;
  };
  testId?: string;
}

export const InfoBar = ({
  message,
  icon,
  callToAction,
  testId,
}: Readonly<Props>): JSX.Element => {
  return (
    <Flex className={cx.container}>
      <Box
        className={cx.icon}
        data-testid={testId ? `${testId}-icon` : 'info-bar-icon'}
      >
        {icon}
      </Box>
      <Box>
        <Text.Button
          weight="$semibold"
          className={cx.message}
          data-testid={testId ? `${testId}-message` : 'info-bar-message'}
        >
          {message}
        </Text.Button>
      </Box>

      {callToAction && (
        <Box ml="$24">
          <CallToAction
            onClick={callToAction.onClick}
            label={callToAction.label}
            data-testid={testId ? `${testId}-cta` : 'info-bar-cta'}
          />
        </Box>
      )}
    </Flex>
  );
};
