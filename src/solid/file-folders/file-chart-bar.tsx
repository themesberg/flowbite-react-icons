import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileChartBar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M5 5V.13a2.98 2.98 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5z" />
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2M6 16a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0zm3 0a1 1 0 1 1-2 0v-6a1 1 0 0 1 2 0zm3 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFileChartBar);
export default ForwardRef;
