import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 11"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5.64H1m0 0 4 3.791m-4-3.79L5 1.85"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
