import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Minus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 2"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h16"
    />
  </svg>
);

const ForwardRef = forwardRef(Minus);
export default ForwardRef;
