import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 2"
    ref={ref}
    {...props}
  >
    <path fill="#2F2F38" d="M17 0H1a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2" />
  </svg>
);

const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
