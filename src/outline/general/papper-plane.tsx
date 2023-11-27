import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPapperPlane = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 17 8 2L9 1 1 19zm0 0V9"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPapperPlane);
export default ForwardRef;
