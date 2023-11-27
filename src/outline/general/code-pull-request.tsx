import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCodePullRequest = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCodePullRequest);
export default ForwardRef;
