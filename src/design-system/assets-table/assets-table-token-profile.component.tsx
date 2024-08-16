import React from 'react';

import { Box } from '../box';
import { Grid, Cell } from '../grid';
import { Image } from '../profile-picture';
import { Text } from '../text';

import * as cx from './assets-table-token-profile.css';

interface Props {
  imageSrc: string;
  name: string;
  description: string;
  testId?: string;
}

export const TokenProfile = ({
  imageSrc,
  name,
  description,
  testId = 'token-profile',
}: Readonly<Props>): JSX.Element => {
  return (
    <div className={cx.container}>
      <Grid columns="$fitContent" gutters="$0">
        <Cell>
          <Box mr="$24">
            <Image imageSrc={imageSrc} alt={name} testId={`${testId}-icon`} />
          </Box>
        </Cell>
        <Cell>
          <Text.Body.Large weight="$semibold" data-testid={`${testId}-name`}>
            {name}
          </Text.Body.Large>
          <Box>
            <Text.Body.Normal
              color="secondary"
              weight="$semibold"
              data-testid={`${testId}-ticker`}
            >
              {description}
            </Text.Body.Normal>
          </Box>
        </Cell>
      </Grid>
    </div>
  );
};
