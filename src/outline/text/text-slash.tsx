import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const TextSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 3V2h10v1M4 14h4m-1.245-3.018L6 14M9 2 7.579 7.579m0 0L1 1m6.579 6.579L15 15"
    />
  </svg>
);

const ForwardRef = forwardRef(TextSlash);
export default ForwardRef;
