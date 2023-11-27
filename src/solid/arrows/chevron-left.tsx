import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.99 10a.998.998 0 0 1-.706-.293L.292 5.712a1 1 0 0 1 0-1.412L4.284.305a.998.998 0 1 1 1.411 1.412L2.41 5.007l3.286 3.288A.999.999 0 0 1 4.99 10"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;