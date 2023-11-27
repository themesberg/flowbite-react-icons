import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCodeBranch = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 22"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.458 4a3 3 0 1 0-4.478 2.6A2.6 2.6 0 0 1 8.4 9H6.6c-.93 0-1.836.285-2.6.814v-3a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0V13.6A2.607 2.607 0 0 1 6.6 11h1.8a4.6 4.6 0 0 0 4.548-4.049A3 3 0 0 0 15.458 4"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCodeBranch);
export default ForwardRef;
