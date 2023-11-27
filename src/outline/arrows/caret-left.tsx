import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CaretLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.293 2.18 1.707 7.474a.923.923 0 0 0-.293.67c0 .251.106.492.293.67l5.586 5.294a1.046 1.046 0 0 0 1.09.205.99.99 0 0 0 .448-.349.913.913 0 0 0 .169-.526V2.85a.913.913 0 0 0-.169-.527.99.99 0 0 0-.448-.349 1.051 1.051 0 0 0-.578-.053 1.018 1.018 0 0 0-.512.259Z"
    />
  </svg>
);

const ForwardRef = forwardRef(CaretLeft);
export default ForwardRef;
