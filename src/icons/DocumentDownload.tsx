import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocumentDownload = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M3.5 4h13m-13 4h9m-9 4h9m5-4v12m0 0-4-4m4 4 4-4"
    />
  </svg>
);
export default SvgDocumentDownload;
