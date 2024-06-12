import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronUpcomponent = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m3.333 10 4.666-4.667L12.666 10"
    />
  </svg>
);
export default SvgChevronUpcomponent;
