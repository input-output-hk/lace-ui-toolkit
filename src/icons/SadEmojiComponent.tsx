import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSadEmojicomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="silver"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M24.714 26.953a6.667 6.667 0 0 0-9.428 0M25 16.667h-.017m-9.983 0h-.017M5 20c0 8.284 6.716 15 15 15s15-6.716 15-15S28.284 5 20 5 5 11.716 5 20"
    />
  </svg>
);
export default SvgSadEmojicomponent;
