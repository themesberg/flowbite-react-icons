import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronDoubleRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 10"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 8.935 4-3.791-4-3.791M1 8.935l4-3.791-4-3.791"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDoubleRight);
export default ForwardRef;
