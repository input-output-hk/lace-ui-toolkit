import { sx, style } from '../../design-tokens';

export const button = style({
  background: 'none',
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
});

export const chevronIcon = sx({
  w: '$auto',
  h: '$auto',
  marginLeft: '$8',
});
