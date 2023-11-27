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
    <g fill="currentColor">
      <path d="M5 5V.13a2.98 2.98 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5zm1.5 10c.828 0 1.5-.448 1.5-1s-.672-1-1.5-1-1.5.448-1.5 1 .672 1 1.5 1" />
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2M12 10a1 1 0 0 1-1-1 2.971 2.971 0 0 0-1-2.237V13.5a.963.963 0 0 1-.037.185c.019.104.031.21.037.315a3.283 3.283 0 0 1-3.5 3A3.283 3.283 0 0 1 3 14a3.283 3.283 0 0 1 3.5-3 3.942 3.942 0 0 1 1.5.3V5a1 1 0 0 1 1.316-.948C9.467 4.1 13 5.321 13 9a1 1 0 0 1-1 1" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFileMusic);
export default ForwardRef;