import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoadingcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={240}
    height={240}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 21a9 9 0 1 1 6.546-15.177"
    />
  </svg>
);
export default SvgLoadingcomponent;
