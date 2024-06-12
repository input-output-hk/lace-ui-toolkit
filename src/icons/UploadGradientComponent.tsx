import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUploadGradientcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#upload-gradient_component_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8-4-4m0 0L8 8m4-4v12"
    />
    <defs>
      <linearGradient
        id="upload-gradient_component_svg__a"
        x1={1.072}
        x2={2.801}
        y1={22.928}
        y2={-0.514}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92E1" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgUploadGradientcomponent;
