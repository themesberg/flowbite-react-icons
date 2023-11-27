import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChartLineDown = (
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
    <g fill="currentColor">
      <path d="M17 14H2V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2" />
      <path d="M6.2 9.6a1 1 0 0 0 1.507.11L11 6.414 13.586 9h-.793a1 1 0 1 0 0 2H16a1 1 0 0 0 1-1V6.793a1 1 0 0 0-2 0v.793l-3.293-3.293a1 1 0 0 0-1.414 0L7.108 7.478 4.8 4.4a1 1 0 1 0-1.6 1.2l3 4Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ChartLineDown);
export default ForwardRef;
