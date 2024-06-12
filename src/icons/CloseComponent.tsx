import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClosecomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.2 14.8 9.6-9.6m-9.6 0 9.6 9.6"
    />
  </svg>
);
export default SvgClosecomponent;
