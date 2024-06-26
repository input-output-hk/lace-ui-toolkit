import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#key_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 7.667A3.333 3.333 0 0 1 24.335 11M31 11c0 5.523-4.477 10-10 10-1.01 0-1.985-.15-2.904-.428l-3.762 3.761H11v3.334H7.667V31h-5C1.747 31 1 30.254 1 29.333v-4.31c0-.441.176-.865.489-1.178l9.94-9.94A10 10 0 0 1 11 11c0-5.523 4.477-10 10-10s10 4.477 10 10"
    />
    <defs>
      <linearGradient
        id="key_svg__a"
        x1={-4.489}
        x2={39.465}
        y1={-4.489}
        y2={-1.248}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92E1" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgKey;
