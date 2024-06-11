import React from 'react';

import classNames from 'classnames';

import { Box } from '../box';

import * as cx from './flow-card.css';

import type { OmitClassName } from '../../types';

type Props = OmitClassName<'div'> & {
  children: React.ReactNode;
  flowCardClassName: string;
};

export const Card = ({ children, ...props }: Readonly<Props>): JSX.Element => (
  <Box
    className={classNames([cx.container, props.flowCardClassName])}
    {...props}
  >
    {children}
  </Box>
);
