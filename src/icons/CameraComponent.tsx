import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameracomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g
      stroke="silver"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
    >
      <path d="M5 15a3.333 3.333 0 0 1 3.333-3.334h1.55a3.33 3.33 0 0 0 2.773-1.484L14.01 8.15a3.33 3.33 0 0 1 2.774-1.484h6.432c1.115 0 2.155.557 2.774 1.484l1.354 2.032a3.33 3.33 0 0 0 2.773 1.484h1.55A3.333 3.333 0 0 1 35 14.999v15a3.333 3.333 0 0 1-3.333 3.334H8.333A3.333 3.333 0 0 1 5 29.999z" />
      <path d="M25 21.666a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    </g>
  </svg>
);
export default SvgCameracomponent;
