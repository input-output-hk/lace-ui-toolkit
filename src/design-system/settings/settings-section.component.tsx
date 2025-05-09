import React from 'react';

import { Box } from '../box';
import { Text } from '../text';

import * as styles from './settings-section.css';

interface SettingsCardProps {
  title: string;
  testId?: string;
  children: React.ReactNode;
}

export const SettingsSection = ({
  children,
  title,
  testId = 'settings-section',
}: SettingsCardProps): React.ReactElement => (
  <div data-testid="settings-card" className={styles.root}>
    <Box pl="$16" mb="$16">
      <Text.SubHeading data-testid={`${testId}-heading`}>
        {title}
      </Text.SubHeading>
    </Box>
    <div>{children}</div>
  </div>
);
