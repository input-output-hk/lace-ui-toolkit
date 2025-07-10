import React from 'react';

import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Box } from '../box';
import { Flex } from '../flex';
import * as NavigationButtons from '../navigation-buttons';
import { Text } from '../text';

import { Close } from './side-drawer-close.component';
import * as cx from './side-drawer-content-header.css';
import { Separator } from './side-drawer-separator.component';

interface Props {
  text: string;
  onBackClick?: () => void;
  onCloseClick: () => void;
}

export const Header = ({
  text,
  onBackClick,
  onCloseClick,
}: Readonly<Props>): JSX.Element => (
  <Box className={cx.gridArea}>
    <Flex
      className={cx.container}
      alignItems="center"
      justifyContent="space-between"
    >
      {onBackClick !== undefined && (
        <Flex w="$40">
          <NavigationButtons.Back
            onClick={onBackClick}
            data-testid="drawer-header-back-button"
          />
        </Flex>
      )}
      <Flex justifyContent="center" w="$fill">
        <VisuallyHidden>
          <DialogTitle>{text}</DialogTitle>
        </VisuallyHidden>
        <Text.Body.Large weight="$bold" data-testid="drawer-header-title">
          {text}
        </Text.Body.Large>
      </Flex>
      <Flex w="$40">
        <Close>
          <NavigationButtons.Close
            onClick={onCloseClick}
            data-testid="drawer-header-close-button"
          />
        </Close>
      </Flex>
    </Flex>
    <Box mb="$32">
      <Separator />
    </Box>
  </Box>
);
