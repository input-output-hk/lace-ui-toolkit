import React, { forwardRef } from 'react';

import * as cx from './backdrop.css';

export interface BackdropProps {
  zIndex?: number;
}

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ zIndex }, forwardReference): JSX.Element => (
    <div ref={forwardReference} className={cx.container} style={{ zIndex }} />
  ),
);

Backdrop.displayName = 'Backdrop';
