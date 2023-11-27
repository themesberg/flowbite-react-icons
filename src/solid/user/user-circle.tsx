import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUserCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0m0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 13a8.948 8.948 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUserCircle);
export default ForwardRef;
