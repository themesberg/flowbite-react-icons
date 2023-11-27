import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChevronRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 6 10"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10"
    />
  </svg>
);

const ForwardRef = forwardRef(ChevronRight);
export default ForwardRef;
