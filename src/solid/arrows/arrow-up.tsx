import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m10.707 4.293-4-4a1 1 0 0 0-1.416 0l-4 4a1 1 0 1 0 1.414 1.414L5 3.414V13a1 1 0 1 0 2 0V3.414l2.293 2.293a1 1 0 0 0 1.414-1.414Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowUp);
export default ForwardRef;
