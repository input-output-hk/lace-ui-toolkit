import { style } from '../../design-tokens';

export const profileBox = style({
  flexShrink: 0, // ensure it doesn't shrink
});

export const titleBox = style({
  minWidth: 0, // ensure it doesn't overflow parent container width
});

// Truncate title with ellipsis when it would overflow parent container
// https://css-tricks.com/using-flexbox-and-text-ellipsis-together/
export const title = style({
  display: 'block',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const subtitleBox = style({
  position: 'relative',
});

export const subtitleContentOffset = style({
  top: '-4px',
});

export const subtitleButtonOffset = style({
  top: '-2px',
});
