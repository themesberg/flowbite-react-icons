import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgEllipseHorizontal = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 3"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgEllipseHorizontal);
export default ForwardRef;
