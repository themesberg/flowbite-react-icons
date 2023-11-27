import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 11"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 1.549-4 3.79 4 3.792"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;
