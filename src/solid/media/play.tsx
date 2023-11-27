import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
