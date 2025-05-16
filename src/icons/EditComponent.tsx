import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEditcomponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m12.593 3.407.442-.442zM4.944 13.02v.625a.63.63 0 0 0 .442-.183zM3 13.02h-.625c0 .345.28.625.625.625zm0-1.984-.442-.442a.63.63 0 0 0-.183.442zm8.071-7.187a.764.764 0 0 1 1.08 0l.884-.884a2.014 2.014 0 0 0-2.848 0zm1.08 0a.764.764 0 0 1 0 1.08l.884.884a2.014 2.014 0 0 0 0-2.848zm0 1.08-7.648 7.649.883.884 7.65-7.65zm-7.207 7.466H3v1.25h1.944zm5.243-9.43-7.629 7.629.884.884 7.629-7.63zm-7.812 8.07v1.985h1.25v-1.984zm6.979-6.353 1.964 1.964.884-.884-1.964-1.964z"
    />
  </svg>
);
export default SvgEditcomponent;
