import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CodeMerge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6-3.976-2-.01A4.015 4.015 0 0 1 3 7m10 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);

const ForwardRef = forwardRef(CodeMerge);
export default ForwardRef;
