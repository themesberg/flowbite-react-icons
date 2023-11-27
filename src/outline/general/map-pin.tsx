import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgMapPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12m0 0v6M4.5 7A2.5 2.5 0 0 1 7 4.5"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMapPin);
export default ForwardRef;
