import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Code = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
    />
  </svg>
);

const ForwardRef = forwardRef(Code);
export default ForwardRef;
