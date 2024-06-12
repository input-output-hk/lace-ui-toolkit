import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortAlphabeticalDesccomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8v12m0 0-4-4m4 4 4-4"
    />
    <path
      fill="currentColor"
      d="M10 22H8.21l-.484-1.38h-3.44L3.8 22H2l2.978-8h2.055zm-2.724-2.855-1.27-3.67-1.282 3.67zM9 11H3V9.62L6.72 4.5H3V3h5.917v1.367l-3.72 5.134H9z"
    />
  </svg>
);
export default SvgSortAlphabeticalDesccomponent;
