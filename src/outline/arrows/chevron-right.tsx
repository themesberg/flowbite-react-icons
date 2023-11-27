import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 6 11"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 9.13 4-3.79-4-3.791"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
