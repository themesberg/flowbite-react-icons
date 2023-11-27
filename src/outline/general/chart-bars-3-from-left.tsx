import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChartBars3FromLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="#2F2F38"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h14M1 6h14M1 11h7"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChartBars3FromLeft);
export default ForwardRef;
