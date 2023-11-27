import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCart);
export default ForwardRef;
