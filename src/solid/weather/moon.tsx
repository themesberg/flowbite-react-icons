import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Moon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.519 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997"
    />
  </svg>
);

const ForwardRef = forwardRef(Moon);
export default ForwardRef;
