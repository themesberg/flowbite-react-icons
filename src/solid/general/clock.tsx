import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0m3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
