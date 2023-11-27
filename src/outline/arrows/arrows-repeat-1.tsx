import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ArrowsRepeat1 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9.588v3.791H1l3 2.843m-1-8.53v-3.79h16l-3-2.843M9 7.693l2-.948v3.791"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowsRepeat1);
export default ForwardRef;
