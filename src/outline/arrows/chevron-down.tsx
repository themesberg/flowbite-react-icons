import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 7"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1.444 4 3.791 4-3.79"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;
