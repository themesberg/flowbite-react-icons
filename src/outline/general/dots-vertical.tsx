import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgDotsVertical = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 4 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={3}
      d="M1.5 2h.01M1.5 8h.01m-.01 6h.01"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDotsVertical);
export default ForwardRef;
