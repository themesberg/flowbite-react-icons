import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Eye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </svg>
);

const ForwardRef = forwardRef(Eye);
export default ForwardRef;
