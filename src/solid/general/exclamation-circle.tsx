import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgExclamationCircle = (
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
      fill="#2F2F38"
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5M10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgExclamationCircle);
export default ForwardRef;
