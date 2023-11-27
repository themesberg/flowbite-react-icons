import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 7"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 5.235-4-3.79-4 3.79"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronUp);
export default ForwardRef;
