import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFaceLaugh = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5M13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceLaugh);
export default ForwardRef;
