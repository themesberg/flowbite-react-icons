import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Chart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"
    />
  </svg>
);

const ForwardRef = forwardRef(Chart);
export default ForwardRef;
