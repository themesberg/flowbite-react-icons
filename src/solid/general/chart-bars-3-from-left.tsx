import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChartBars3FromLeft = (
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
      d="M1 1h14M1 6h14M1 11h7"
    />
  </svg>
);

const ForwardRef = forwardRef(ChartBars3FromLeft);
export default ForwardRef;
