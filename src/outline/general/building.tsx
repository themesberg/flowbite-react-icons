import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBuilding = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6zm5 0h1v1h-1zM6 8h1v1H6zm5 0h1v1h-1zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBuilding);
export default ForwardRef;
