import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
