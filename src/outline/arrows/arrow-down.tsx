import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 15"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 1.954v11.373m0 0 4-3.791m-4 3.79-4-3.79"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
