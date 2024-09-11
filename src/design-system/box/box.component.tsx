import React, { HTMLAttributes, forwardRef } from 'react';
import type { CSSProperties, PropsWithChildren } from 'react';

import classNames from 'classnames';

import { sx } from '../../design-tokens';

import type { Sx } from '../../design-tokens';

export type BoxProps = Pick<
  Sx,
  | 'h'
  | 'm'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'mt'
  | 'mx'
  | 'my'
  | 'p'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'pt'
  | 'px'
  | 'py'
  | 'w'
> & { className?: string; testId?: string; style?: CSSProperties };

export type Props = PropsWithChildren<BoxProps> &
  HTMLAttributes<HTMLDivElement>;

export const Box = forwardRef<HTMLDivElement | null, Readonly<Props>>(
  (
    {
      children,
      className,
      h,
      m,
      mb,
      ml,
      mr,
      mt,
      mx,
      my,
      p,
      pb,
      pl,
      pr,
      pt,
      px,
      py,
      w,
      testId = 'box',
      ...props
    },
    ref,
  ): JSX.Element => (
    <div
      {...props}
      data-testid={testId}
      className={classNames(
        sx({ h, m, mb, ml, mr, mt, mx, my, p, pb, pl, pr, pt, px, py, w }),
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  ),
);

Box.displayName = 'Box';
