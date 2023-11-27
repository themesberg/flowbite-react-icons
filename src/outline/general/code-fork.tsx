import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCodeFork = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10v5m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCodeFork);
export default ForwardRef;