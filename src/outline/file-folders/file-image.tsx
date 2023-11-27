import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FileImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2zM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"
    />
  </svg>
);

const ForwardRef = forwardRef(FileImage);
export default ForwardRef;
