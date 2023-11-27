import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.969.969 0 0 1-.932 1H1.934A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.829 1h8.239A.969.969 0 0 1 15 2Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
