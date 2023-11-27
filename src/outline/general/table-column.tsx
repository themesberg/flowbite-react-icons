import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTableColumn = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M2 5h17m-9 8V6M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTableColumn);
export default ForwardRef;
