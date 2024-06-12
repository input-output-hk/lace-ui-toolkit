import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckBoxcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.917 7.584 5.25 9.917l5.833-5.833"
    />
  </svg>
);
export default SvgCheckBoxcomponent;
