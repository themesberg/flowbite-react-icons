import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 11"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13 5H3.414l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.416l4 4a1 1 0 0 0 1.414-1.414L3.414 7H13a1 1 0 1 0 0-2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
