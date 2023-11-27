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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0M4.6 11a5.5 5.5 0 0 0 10.81 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceLaugh);
export default ForwardRef;
