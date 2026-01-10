import React, { ReactNode } from 'react';

import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';

import * as styles from './setting.css';

interface SettingsItemProps {
  addon?: ReactNode;
  description: ReactNode;
  onClick?: () => void;
  testId?: string;
  title?: ReactNode | string;
}

export const Setting = ({
  description,
  addon,
  onClick,
  testId = 'setting',
  title,
}: SettingsItemProps): React.ReactElement => (
  <Box mb="$32" className={styles.root}>
    <div className={styles.separator} />
    <Box
      pt="$32"
      pb="$32"
      pl="$16"
      pr="$16"
      className={styles.content}
      onClick={onClick}
      data-testid={testId}
    >
      {title ? (
        <Box>
          <Text.Body.Large weight="$semibold" data-testid={`${testId}-title`}>
            {title}
          </Text.Body.Large>
        </Box>
      ) : null}
      <Flex justifyContent="space-between">
        <Text.Body.Normal data-testid={`${testId}-description`}>
          {description}
        </Text.Body.Normal>
        <div data-testid={`${testId}-addon`}>{addon}</div>
      </Flex>
    </Box>
  </Box>
);
