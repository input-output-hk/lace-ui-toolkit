import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMnemoniccomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
  >
    <path
      fill="#EFEFEF"
      d="M10 14a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4v72a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z"
    />
    <rect width={31} height={6} x={16} y={22} fill="silver" rx={2} />
    <rect width={31} height={6} x={16} y={34} fill="silver" rx={2} />
    <rect width={31} height={6} x={16} y={46} fill="silver" rx={2} />
    <rect width={31} height={6} x={16} y={58} fill="silver" rx={2} />
    <rect width={31} height={6} x={53} y={22} fill="silver" rx={2} />
    <rect width={31} height={6} x={53} y={34} fill="silver" rx={2} />
    <rect width={31} height={6} x={53} y={46} fill="silver" rx={2} />
    <rect width={31} height={6} x={53} y={58} fill="silver" rx={2} />
    <rect width={13} height={6} x={43} y={76} fill="#F9F9F9" rx={3} />
  </svg>
);
export default SvgMnemoniccomponent;
