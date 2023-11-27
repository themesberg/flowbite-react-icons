import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Window = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 7h18M2 1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
    />
    <path
      fill="currentColor"
      d="M4.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(Window);
export default ForwardRef;
