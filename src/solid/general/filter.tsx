import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.992 1.992 0 0 0 .18-2.09Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;