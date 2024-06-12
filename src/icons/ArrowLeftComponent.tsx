import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeftcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 15 1 8m0 0 7-7M1 8h18"
    />
  </svg>
);
export default SvgArrowLeftcomponent;
