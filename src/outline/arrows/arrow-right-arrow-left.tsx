import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowRightArrowLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 15"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 10.484H1m0 0L4 7.64m-3 2.843 3 2.843m1-8.53h10m0 0L12 7.64m3-2.844-3-2.843"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRightArrowLeft);
export default ForwardRef;