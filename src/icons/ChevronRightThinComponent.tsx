import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronRightThincomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M6.125 3.625 10.5 8l-4.375 4.375"
    />
  </svg>
);
export default SvgChevronRightThincomponent;
