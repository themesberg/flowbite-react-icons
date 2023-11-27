import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SortHorizontal = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 8.989H3.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.416l3 3a1 1 0 0 0 1.414-1.414l-1.293-1.295H11a1 1 0 1 0 0-2m6.923-4.619a1 1 0 0 0-.217-1.09l-3-3a1 1 0 0 0-1.414 1.415l1.294 1.294H7a1 1 0 0 0 0 2h7.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a.989.989 0 0 0 .216-.325Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SortHorizontal);
export default ForwardRef;
