import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockGradientcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={112}
    height={113}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#clock-gradient_component_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M56 38.07v18.667l14 14m28-14c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42"
    />
    <defs>
      <linearGradient
        id="clock-gradient_component_svg__a"
        x1={-1.37}
        x2={121.7}
        y1={-0.633}
        y2={8.444}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF92DE" />
        <stop offset={1} stopColor="#FDC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgClockGradientcomponent;
