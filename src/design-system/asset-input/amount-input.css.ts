import { styleVariants } from '@vanilla-extract/css';

import { style, vars } from '../../design-tokens';
import { bold } from '../text/text.css';

const inputTypography = style({
  fontFamily: vars.fontFamily.$nova,
  fontSize: vars.fontSizes.$25,
  fontWeight: vars.fontWeights.$bold,
});

export const amountInputSizer = style([
  inputTypography,
  {
    ':after': {
      content: 'attr(data-value) " "',
      visibility: 'hidden',
      whiteSpace: 'pre-wrap',
      gridArea: '1 / 2',
    },
    display: 'inline-grid',
  },
]);

const amountInputBase = style([
  inputTypography,
  bold,
  {
    gridArea: '1 / 2',
    border: 'none',
    width: 'auto',
    background: 'none',
    margin: 0,
    appearance: 'none',
    outline: 'none',
    minWidth: vars.spacing.$40,
    color: vars.colors.$text_primary,
    '::placeholder': {
      color: vars.colors.$bundle_input_secondary_label_color,
    },
  },
]);

export const amountInput = styleVariants({
  left: [
    amountInputBase,
    {
      textAlign: 'left',
    },
  ],
  right: [
    amountInputBase,
    {
      textAlign: 'right',
    },
  ],
});
