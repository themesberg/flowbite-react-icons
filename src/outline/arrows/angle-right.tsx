import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgAngleRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 15"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 13.026 6.7 7.98a.866.866 0 0 0 .221-.29.823.823 0 0 0-.221-.988L1 1.654"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAngleRight);
export default ForwardRef;
