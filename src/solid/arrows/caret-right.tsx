import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CaretRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"
    />
  </svg>
);

const ForwardRef = forwardRef(CaretRight);
export default ForwardRef;
