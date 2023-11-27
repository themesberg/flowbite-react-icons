import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronDoubleLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 10"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 1.353-4 3.79 4 3.792m6-7.582-4 3.79 4 3.792"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDoubleLeft);
export default ForwardRef;
