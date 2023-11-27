import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChevronDoubleUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 12"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 5.196-4-3.79-4 3.79m8 5.686-4-3.79-4 3.79"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDoubleUp);
export default ForwardRef;
