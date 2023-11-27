import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F3039"
      d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153zM7 9a1 1 0 0 1-2 0V7h2zm0-5a2 2 0 1 1 4 0v1H7zm6 5a1 1 0 0 1-2 0V7h2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBag);
export default ForwardRef;
