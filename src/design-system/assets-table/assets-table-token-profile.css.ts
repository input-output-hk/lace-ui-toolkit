import { style, vars } from '../../design-tokens';

export const container = style({
  gridArea: 'tokenProfile',
});

export const badge = style({
  backgroundColor: vars.colors.$assets_table_badge_bgColor,
  borderRadius: vars.radius.$medium,
  padding: `0 ${vars.spacing.$4}`,
  color: vars.colors.$assets_table_badge_textColor,
});
