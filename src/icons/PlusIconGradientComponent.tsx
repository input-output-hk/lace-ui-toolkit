import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlusIconGradientcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#plus-icon-gradient_component_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 1.667v26.666M27.833 15H1.167"
    />
    <defs>
      <linearGradient
        id="plus-icon-gradient_component_svg__a"
        x1={-3.713}
        x2={35.357}
        y1={-3.213}
        y2={-0.331}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92DE" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgPlusIconGradientcomponent;
