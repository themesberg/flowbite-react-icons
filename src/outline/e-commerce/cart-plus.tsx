import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCartPlus = (
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
      d="M8 5h4m-2 2V3M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m.938-11H17l-2 7H5m0 0L3 4m0 0h2M3 4l-.792-3H1"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCartPlus);
export default ForwardRef;
