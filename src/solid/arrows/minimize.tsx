import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Minimize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 1a1 1 0 0 0-1 1v2.586L2.707 1.293a1 1 0 0 0-1.414 1.414L4.586 6H2a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m0 11H2a1 1 0 1 0 0 2h2.586l-3.293 3.293a1 1 0 1 0 1.414 1.414L6 15.414V18a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m11-6h-2.586l3.293-3.293a1 1 0 1 0-1.414-1.414L14 4.586V2a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2m1 7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.586l3.293 3.293a1 1 0 0 0 1.414-1.414L15.414 14H18a1 1 0 0 0 1-1"
    />
  </svg>
);

const ForwardRef = forwardRef(Minimize);
export default ForwardRef;
