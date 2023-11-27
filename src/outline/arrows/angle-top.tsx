import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgAngleTop = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 9"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7.183 7.674 1.781a.909.909 0 0 0-.305-.21.952.952 0 0 0-1.043.21L1 7.183"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAngleTop);
export default ForwardRef;
