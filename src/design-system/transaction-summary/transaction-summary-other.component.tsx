import React from 'react';

import InfoIcon from '@icons/InfoComponent';
import classNames from 'classnames';

import { Box } from '../box';
import { Flex } from '../flex';
import { Grid, Cell } from '../grid';
import { Text } from '../text';
import { Tooltip } from '../tooltip';

import * as cx from './transaction-summary.css';

import type { OmitClassName } from '../../types';

type Props = OmitClassName<'div'> & {
  label: string;
  text: string;
  tooltip?: string;
  'data-testid'?: string;
  textAlignRight?: boolean;
};

const makeTestId = (namespace = '', path = ''): string | undefined => {
  return namespace === '' ? undefined : `tx-other-${namespace}-${path}`;
};

export const Other = ({
  label,
  text,
  tooltip,
  textAlignRight = false,
  ...props
}: Readonly<Props>): JSX.Element => {
  const testId = props['data-testid'];

  return (
    <Grid {...props} columns="$2">
      <Cell>
        <Flex>
          <Text.Body.Normal weight="$semibold">{label}</Text.Body.Normal>
          {tooltip !== undefined && (
            <Box ml="$8">
              <Tooltip label={tooltip}>
                <div data-testid={makeTestId(testId, 'tooltip-icon')}>
                  <InfoIcon className={cx.tooltipIcon} />
                </div>
              </Tooltip>
            </Box>
          )}
        </Flex>
      </Cell>
      <Cell>
        <Flex justifyContent="flex-end" h="$fill">
          <Text.Body.Normal
            weight="$medium"
            className={classNames(cx.text, {
              [cx.textAlignRight]: textAlignRight,
            })}
          >
            {text}
          </Text.Body.Normal>
        </Flex>
      </Cell>
    </Grid>
  );
};
