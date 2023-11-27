import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChartLineUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1v14h16M4 5l3 4 4-4 5 5m0 0h-3.207M16 10V6.793"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChartLineUp);
export default ForwardRef;
