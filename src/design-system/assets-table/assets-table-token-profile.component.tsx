import React, { ReactElement, ReactNode } from 'react';

import { Box } from '../box';
import { Grid, Cell } from '../grid';
import { Image } from '../profile-picture';
import { Text } from '../text';

import * as cx from './assets-table-token-profile.css';

const getImageAlt = ({ alt, name }: { alt?: string; name: ReactNode }) => {
  if (alt) return alt;
  return typeof name === 'string' ? name : undefined;
};

type TokenProfileProps = {
  alt?: string;
  image: ReactNode;
  name: ReactNode;
  description: ReactNode;
  testId?: string;
};

export const TokenProfile = ({
  alt,
  image,
  name,
  description,
  testId = 'token-profile',
}: Readonly<TokenProfileProps>): ReactElement => {
  const imageNode =
    typeof image === 'string' ? (
      <Image
        imageSrc={image}
        alt={getImageAlt({ alt, name })}
        testId={`${testId}-icon`}
      />
    ) : (
      image
    );

  return (
    <div className={cx.container} data-testid={testId}>
      <Grid columns="$fitContent" gutters="$0">
        <Cell>
          <Box mr="$24">{imageNode}</Box>
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
