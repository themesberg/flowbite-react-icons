import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const LockTime = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11 8H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7m2.5-11V4.5a3.5 3.5 0 0 0-7 0V8m10 5.217V14.5l.9.9m3.6-.9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);

const ForwardRef = forwardRef(LockTime);
export default ForwardRef;
