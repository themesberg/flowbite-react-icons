import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CaretRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="m2.707 14.108 5.586-5.294a.923.923 0 0 0 .293-.67.923.923 0 0 0-.293-.67L2.707 2.18a1.018 1.018 0 0 0-.512-.26 1.051 1.051 0 0 0-.578.054.99.99 0 0 0-.448.35A.913.913 0 0 0 1 2.85v10.588c0 .187.059.37.169.526a.99.99 0 0 0 .448.35c.183.07.384.09.578.053a1.02 1.02 0 0 0 .512-.26Z"
    />
  </svg>
);

const ForwardRef = forwardRef(CaretRight);
export default ForwardRef;
