import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;