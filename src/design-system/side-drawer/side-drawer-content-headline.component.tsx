import React from 'react';

import { Box } from '../box';
import { Text } from '../text';

interface Props {
  title: string;
  description?: string;
}

export const Headline = ({
  title,
  description,
}: Readonly<Props>): JSX.Element => (
  <Box>
    <Text.SubHeading weight="$bold" data-testid="drawer-title">
      {title}
    </Text.SubHeading>
    {description !== undefined && (
      <Box mt="$8">
        <Text.Body.Normal
          color="secondary"
          weight="$medium"
          data-testid="drawer-subtitle"
        >
          {description}
        </Text.Body.Normal>
      </Box>
    )}
  </Box>
);
