import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowRightToBracket = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M12.923 8.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L9.586 7H1a1 1 0 0 0 0 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a.99.99 0 0 0 .216-.325" />
      <path d="M15 0h-3a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRightToBracket);
export default ForwardRef;