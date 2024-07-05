import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKeyFilledcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="url(#key-filled_component_svg__a)"
      fillRule="evenodd"
      d="M18 8a6 6 0 0 1-7.743 5.743L8 16H6v2H2v-4l4.257-4.257A6 6 0 1 1 18 8m-6-4a1 1 0 1 0 0 2 2 2 0 0 1 2 2 1 1 0 1 0 2 0 4 4 0 0 0-4-4"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="key-filled_component_svg__a"
        x1={-0.928}
        x2={22.514}
        y1={-0.928}
        y2={0.801}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92DE" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgKeyFilledcomponent;
