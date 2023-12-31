import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ArrowUpDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.293 15.293 5 16.586V6a1 1 0 1 0-2 0v10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a.99.99 0 0 0 .326.217.987.987 0 0 0 .764 0 .99.99 0 0 0 .326-.217l3-3a1 1 0 0 0-1.414-1.414h-.002Zm9.414-12-3-3a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.414 1.414L11 3.414V14a1 1 0 0 0 2 0V3.414l1.293 1.293a1 1 0 0 0 1.414-1.414Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowUpDown);
export default ForwardRef;
