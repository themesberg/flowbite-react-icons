import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileImport = (
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
    <g fill="#2F2F38">
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5z" />
      <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v4h7.414l-1.06-1.061a1 1 0 1 1 1.414-1.414l2.768 2.768a1 1 0 0 1 0 1.414l-2.768 2.768a1 1 0 0 1-1.414-1.414L7.414 13H0v5a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFileImport);
export default ForwardRef;
