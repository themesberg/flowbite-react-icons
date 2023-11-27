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
    viewBox="0 0 11 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.707 8.293a1 1 0 0 0-1.414 0L7 10.586V1a1 1 0 1 0-2 0v9.586L2.707 8.293a1 1 0 1 0-1.414 1.414l4 4a.99.99 0 0 0 .326.217.986.986 0 0 0 .764 0 .99.99 0 0 0 .326-.217l4-4a1 1 0 0 0-.002-1.414Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
