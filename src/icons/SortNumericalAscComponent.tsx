import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSortNumericalAsccomponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 6.994C3 4.997 4.078 3 6.5 3 8.91 3 10 4.997 10 6.994S8.91 11 6.5 11C4.078 11 3 8.991 3 6.994m5.161 0c0-1.428-.456-2.531-1.661-2.531-1.217 0-1.674 1.103-1.674 2.531S5.283 9.537 6.5 9.537c1.205 0 1.661-1.115 1.661-2.543M3.477 21.199l.812-1.23c.464.382.954.591 1.715.591 1.38 0 2.153-1.056 2.153-2.23v-.162c-.413.523-1.277.999-2.218.999-1.547 0-2.939-.86-2.939-2.508C3 15.149 4.34 14 6.3 14c2.604 0 3.7 1.811 3.7 4.006C10 20.34 8.543 22 6.004 22c-1.045 0-1.921-.314-2.527-.801m4.654-4.145c-.065-.743-.529-1.626-1.753-1.626-.98 0-1.509.616-1.509 1.161 0 .825.76 1.185 1.586 1.185.644 0 1.276-.268 1.676-.72"
    />
  </svg>
);
export default SvgSortNumericalAsccomponent;
