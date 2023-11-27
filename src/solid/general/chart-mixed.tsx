import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChartMixed = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 19"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M2 12a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m5-4a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m5 4a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m5-4a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1" />
      <path d="M2 9a1 1 0 0 0 .77-.359L7 3.563l4.231 5.078a1.037 1.037 0 0 0 1.538 0l5-6a1.001 1.001 0 0 0-1.538-1.282L12 6.438 7.769 1.359a1.037 1.037 0 0 0-1.538 0l-5 6A1 1 0 0 0 2 9" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgChartMixed);
export default ForwardRef;