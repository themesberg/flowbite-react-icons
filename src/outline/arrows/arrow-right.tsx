import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowRight = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5.64h12m0 0L9 1.85m4 3.79L9 9.432"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
