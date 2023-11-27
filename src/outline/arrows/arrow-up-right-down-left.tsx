import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowUpRightDownLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 1h4m0 0v4m0-4-5 5.243M5 15H1m0 0v-4m0 4 5.243-5"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowUpRightDownLeft);
export default ForwardRef;
