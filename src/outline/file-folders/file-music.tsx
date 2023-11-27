import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileMusic = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1v4a1 1 0 0 1-1 1H1m8 7.5V5s3 1 3 4m3 9a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2zm-6-4c0 1.105-1.12 2-2.5 2S4 15.105 4 14s1.12-2 2.5-2 2.5.895 2.5 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFileMusic);
export default ForwardRef;
