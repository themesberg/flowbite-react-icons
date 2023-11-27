import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Check = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 12"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);

const ForwardRef = forwardRef(Check);
export default ForwardRef;
