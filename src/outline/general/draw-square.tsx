import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgDrawSquare = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3h4M8 17h4m-9-5V8m14 4V8M1 1h4v4H1zm14 0h4v4h-4zM1 15h4v4H1zm14 0h4v4h-4z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDrawSquare);
export default ForwardRef;
