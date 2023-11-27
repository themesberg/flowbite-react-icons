import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowRightBig = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
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
      d="m14.364 15 4.847-7-4.847-7H1.21l4.848 7-4.848 7h13.153z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRightBig);
export default ForwardRef;
