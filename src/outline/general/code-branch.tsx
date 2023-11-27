import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CodeBranch = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9-10v.4A3.6 3.6 0 0 1 8.4 9H6.61A3.6 3.6 0 0 0 3 12.605M14.458 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);

const ForwardRef = forwardRef(CodeBranch);
export default ForwardRef;
