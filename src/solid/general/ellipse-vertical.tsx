import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const EllipseVertical = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 4 15"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);

const ForwardRef = forwardRef(EllipseVertical);
export default ForwardRef;
