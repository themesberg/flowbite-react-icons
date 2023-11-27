import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChartMixed = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChartMixed);
export default ForwardRef;
