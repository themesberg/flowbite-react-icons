import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgShareNodes = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0M17 3.839a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0m0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgShareNodes);
export default ForwardRef;
