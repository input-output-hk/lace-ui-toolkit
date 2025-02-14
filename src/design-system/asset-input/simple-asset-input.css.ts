import { sx, style, vars } from '../../design-tokens';

export const root = style([
  sx({
    width: '$fill',
    rowGap: '$10',
  }),
  {
    background: vars.colors.$input_container_bgColor,
    borderRadius: vars.radius.$medium,
    padding: `${vars.spacing.$16} ${vars.spacing.$20}`,
    display: 'grid',
    gridTemplateAreas: `
    "amount amount"
    "balance balance"
    "error ."
  `,
  },
]);

export const amountBox = style({ gridArea: 'amount' });

export const amountInputContainer = style({
  display: 'block',
  height: '40px',
});

export const amountInput = style({ width: '100%' });

export const balance = style({ gridArea: 'balance' });

export const error = style({ gridArea: 'error' });
