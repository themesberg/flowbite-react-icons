import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronSort = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5.3 5 1.51 1 5.3m0 5.687 4 3.79 4-3.79"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronSort);
export default ForwardRef;
