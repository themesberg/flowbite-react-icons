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
      fill="#2F2F38"
      d="M7 0a7 7 0 0 0-1 13.92V19a1 1 0 1 0 2 0v-5.08A7 7 0 0 0 7 0m0 5.5A1.5 1.5 0 0 0 5.5 7a1 1 0 0 1-2 0A3.5 3.5 0 0 1 7 3.5a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMapPin);
export default ForwardRef;
