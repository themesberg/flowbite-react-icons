import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCaretLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCaretLeft);
export default ForwardRef;
