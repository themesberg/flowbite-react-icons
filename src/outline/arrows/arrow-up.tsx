import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 15"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13.327V1.954m0 0L1 5.745m4-3.79 4 3.79"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
