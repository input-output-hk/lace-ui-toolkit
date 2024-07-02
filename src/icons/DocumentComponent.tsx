import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocumentcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#document_component_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M15 20h10m-10 6.667h10M28.333 35H11.667a3.333 3.333 0 0 1-3.334-3.333V8.333A3.333 3.333 0 0 1 11.667 5h9.31c.441 0 .865.176 1.178.488l9.024 9.024c.312.312.488.736.488 1.178v15.977A3.333 3.333 0 0 1 28.333 35"
    />
    <defs>
      <linearGradient
        id="document_component_svg__a"
        x1={4.064}
        x2={38.323}
        y1={-0.489}
        y2={1.476}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92E1" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDocumentcomponent;
