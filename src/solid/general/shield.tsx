import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Shield = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 18A18.55 18.55 0 0 1 0 3l8-3 8 3a18.549 18.549 0 0 1-8 15"
    />
  </svg>
);

const ForwardRef = forwardRef(Shield);
export default ForwardRef;
