import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChervonDoubleRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 10"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M7.005 10A1 1 0 0 1 6.3 8.295l3.29-3.289L6.3 1.717A.999.999 0 1 1 7.712.305L11.707 4.3a.999.999 0 0 1 0 1.412L7.712 9.707a1 1 0 0 1-.707.293" />
      <path d="M1.011 10a1 1 0 0 1-.706-1.705l3.29-3.289-3.29-3.289A.999.999 0 1 1 1.718.305L5.714 4.3a.999.999 0 0 1 0 1.412L1.718 9.707A1 1 0 0 1 1.01 10Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ChervonDoubleRight);
export default ForwardRef;
