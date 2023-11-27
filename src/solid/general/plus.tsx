import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M17 8h-7V1a1 1 0 0 0-2 0v7H1a1 1 0 0 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
