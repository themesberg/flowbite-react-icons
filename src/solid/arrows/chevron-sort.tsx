import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChevronSort = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 11 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M2.707 5.707 6 2.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414Zm6.586 4.586L6 13.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ChevronSort);
export default ForwardRef;
