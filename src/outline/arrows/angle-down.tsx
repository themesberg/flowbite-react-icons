import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgAngleDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 9"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1.497 5.326 5.402a.94.94 0 0 0 .305.21.952.952 0 0 0 1.043-.21L13 1.497"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAngleDown);
export default ForwardRef;
