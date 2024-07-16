import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLockIconGradientcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#lock-icon-gradient_component_svg__a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.833 14.333V7.667a6.667 6.667 0 1 1 13.334 0M14.5 21v3.333M4.5 31h20a3.333 3.333 0 0 0 3.333-3.333v-10a3.333 3.333 0 0 0-3.333-3.334h-20a3.333 3.333 0 0 0-3.333 3.334v10A3.333 3.333 0 0 0 4.5 31Z"
    />
    <defs>
      <linearGradient
        id="lock-icon-gradient_component_svg__a"
        x1={-3.713}
        x2={35.401}
        y1={-4.489}
        y2={-1.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92DE" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLockIconGradientcomponent;
