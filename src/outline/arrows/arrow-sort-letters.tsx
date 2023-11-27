import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowSortLetters = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16.222V1.06m0 0L1 3.902m3-2.843 3 2.843m4-2.843h6l-6 5.686h6m-7 9.477 3.5-6.634 3.5 6.634m-6.125-1.895H16"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowSortLetters);
export default ForwardRef;