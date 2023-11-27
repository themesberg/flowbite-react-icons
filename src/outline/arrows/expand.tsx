import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 1.758h5m0 0v4.739m0-4.739-5 4.739m-11.021 0V1.758H7m0 15.203H1.979v-4.778m16.021 0v4.778h-5m0-4.778 5 4.739M2 1.758l5 4.739m0 5.686-5 4.739"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgExpand);
export default ForwardRef;
