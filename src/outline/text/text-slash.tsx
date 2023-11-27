import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTextSlash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="#2F3039"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 3V2h10v1M4 14h4m-1.245-3.018L6 14M9 2 7.579 7.579m0 0L1 1m6.579 6.579L15 15"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTextSlash);
export default ForwardRef;
