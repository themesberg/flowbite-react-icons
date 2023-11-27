import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CloudArrowUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M11 16a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1" />
      <path d="M17.989 6.124a6.5 6.5 0 0 0-12.495-2.1A5 5 0 0 0 6 14h4V8.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414L12 8.414V14h5a4 4 0 0 0 .989-7.876" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(CloudArrowUp);
export default ForwardRef;
