import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ArrowRightFromBracket = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M15.923 8.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L12.586 7H4a1 1 0 0 0 0 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a.989.989 0 0 0 .216-.325Z" />
      <path d="M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ArrowRightFromBracket);
export default ForwardRef;
