import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortNumericalDesccomponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.477 10.199.812-1.23c.464.382.954.591 1.715.591 1.38 0 2.153-1.056 2.153-2.23v-.162c-.413.523-1.277.999-2.218.999C3.392 8.167 2 7.307 2 5.659 2 4.149 3.34 3 5.3 3 7.904 3 9 4.811 9 7.006 9 9.34 7.543 11 5.004 11c-1.045 0-1.921-.313-2.527-.801m4.654-4.145c-.065-.743-.529-1.626-1.753-1.626-.98 0-1.509.616-1.509 1.161 0 .825.76 1.185 1.586 1.185.644 0 1.276-.267 1.676-.72M2 17.994C2 15.997 3.078 14 5.5 14 7.91 14 9 15.997 9 17.994S7.91 22 5.5 22C3.078 22 2 19.991 2 17.994m5.161 0c0-1.428-.456-2.531-1.661-2.531-1.217 0-1.674 1.103-1.674 2.531s.457 2.543 1.674 2.543c1.205 0 1.661-1.115 1.661-2.543"
    />
  </svg>
);
export default SvgSortNumericalDesccomponent;
