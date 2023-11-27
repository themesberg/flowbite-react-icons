import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChervonDoubleUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 12"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M9.001 5.994a.999.999 0 0 1-.706-.293l-3.289-3.29-3.289 3.29A.999.999 0 1 1 .305 4.288L4.3.292a.999.999 0 0 1 1.412 0l3.996 3.996A1 1 0 0 1 9 5.994Z" />
      <path d="M9.001 11.988a.998.998 0 0 1-.706-.293l-3.289-3.29-3.289 3.29a1 1 0 1 1-1.412-1.413L4.3 6.286a.999.999 0 0 1 1.412 0l3.996 3.996A.999.999 0 0 1 9 11.988Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgChervonDoubleUp);
export default ForwardRef;
