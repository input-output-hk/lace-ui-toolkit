import { style, vars } from '../../design-tokens';

export const root = style({});

export const separator = style({
  width: '100%',
  height: 1,
  background: vars.colors.$settings_item_separator_color,
  selectors: {
    [`${root}:first-of-type &`]: {
      background: 'none',
    },
    [`${root}:hover &`]: {
      background: 'none',
    },
  },
});

export const content = style({
  selectors: {
    '&:hover': {
      background: vars.colors.$settings_item_hover_bgColor,
      borderRadius: vars.spacing.$16,
      cursor: 'pointer',
    },
  },
});
