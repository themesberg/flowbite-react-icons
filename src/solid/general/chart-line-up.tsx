import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChartLineUp = (
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
      <path d="M4 11a.999.999 0 0 0 .8-.4l2.308-3.078 3.185 3.185a1 1 0 0 0 1.414 0L15 7.414v.793a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1h-3.207a1 1 0 1 0 0 2h.793L11 8.586 7.707 5.293A.97.97 0 0 0 6.929 5a1 1 0 0 0-.729.4l-3 4A1 1 0 0 0 4 11" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ChartLineUp);
export default ForwardRef;
