import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowUpDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 5.85v12.32m0 0 3-2.843M4 18.17l-3-2.843m11-1.896V1.111m0 0L9 3.954m3-2.843 3 2.843"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowUpDown);
export default ForwardRef;
