import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUnderline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M7.5 16A5.506 5.506 0 0 1 2 10.5V1a1 1 0 0 1 2 0v9.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 1 2 0v9.5A5.506 5.506 0 0 1 7.5 16" />
      <path d="M5 2H1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m9 0h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2m1 18H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgUnderline);
export default ForwardRef;
