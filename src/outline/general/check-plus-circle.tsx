import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CheckPlusCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19a8.999 8.999 0 1 1 3.53-17.281M6 9l4 4 7-8m-1 8v5m-2.5-2.5h5"
    />
  </svg>
);

const ForwardRef = forwardRef(CheckPlusCircle);
export default ForwardRef;
