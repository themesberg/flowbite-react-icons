import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChervonDoubleLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 10"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M4.995 10a1 1 0 0 1-.707-.293L.292 5.712a.999.999 0 0 1 0-1.412L4.288.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.999.999 0 0 1 4.995 10" />
      <path d="M10.989 10a1 1 0 0 1-.707-.293L6.286 5.712a.999.999 0 0 1 0-1.412L10.282.305a1 1 0 1 1 1.413 1.412l-3.29 3.29 3.29 3.288A.998.998 0 0 1 10.989 10" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgChervonDoubleLeft);
export default ForwardRef;