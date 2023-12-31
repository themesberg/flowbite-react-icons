import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const DotsHorizontal = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 17 4"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={3}
      d="M2.49 2h.01m6 0h.01m5.99 0h.01"
    />
  </svg>
);

const ForwardRef = forwardRef(DotsHorizontal);
export default ForwardRef;
