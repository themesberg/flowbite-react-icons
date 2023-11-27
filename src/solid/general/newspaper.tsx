import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgNewspaper = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1M3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2m0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2m0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2" />
      <path d="M6 5H5v1h1z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgNewspaper);
export default ForwardRef;
