import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const StarHalf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.707.707A1 1 0 0 0 11 .414a1.6 1.6 0 0 0-1.409.816l-2.525 4.6-5.687.744A1.576 1.576 0 0 0 .065 7.667a1.485 1.485 0 0 0 .456 1.566l4.05 3.552-.95 4.988a1.5 1.5 0 0 0 .567 1.473 1.624 1.624 0 0 0 1.703.181l5.194-2.458a1 1 0 0 0 .915-1V1.414a1 1 0 0 0-.293-.707Z"
    />
  </svg>
);

const ForwardRef = forwardRef(StarHalf);
export default ForwardRef;
