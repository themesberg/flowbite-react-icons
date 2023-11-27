import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Italic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M3.873 16a1.001 1.001 0 0 1-.915-1.4L9.1.6a1 1 0 0 1 1.832.8l-6.142 14a1 1 0 0 1-.917.6" />
      <path d="M7.33 16H1a1 1 0 0 1 0-2h6.33a1 1 0 0 1 0 2M13 2H6.67a1 1 0 0 1 0-2H13a1 1 0 1 1 0 2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(Italic);
export default ForwardRef;
