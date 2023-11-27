import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFilePowerpoint = (
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
    <g fill="#2F2F38">
      <path d="M4.5 11H4v1h.5a.5.5 0 0 0 0-1" />
      <path d="M19 7h-1V2a1.97 1.97 0 0 0-1.934-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 18 18h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1M4.5 14H4v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 1 1 0 5m6 0H10v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 0 1 0 5m6.5-3v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2" />
      <path d="M7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.98 2.98 0 0 0 2.13 5zm3.5 6H10v1h.5a.5.5 0 0 0 0-1" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFilePowerpoint);
export default ForwardRef;
