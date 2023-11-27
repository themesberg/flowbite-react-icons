import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Bars = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 17 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2m0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2m0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(Bars);
export default ForwardRef;
