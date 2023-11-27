import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgStore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="#111928">
      <path d="M20 6.75c0-1.283-1.626-5.33-2.124-6.233A1 1 0 0 0 17 0H3a1 1 0 0 0-.871.508C1.63 1.393 0 5.385 0 6.75a3.236 3.236 0 0 0 1 2.336V19a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6h2v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9.044a3.242 3.242 0 0 0 1-2.294M3.591 2H16.4A19.015 19.015 0 0 1 18 6.75 1.337 1.337 0 0 1 16.75 8a1.252 1.252 0 0 1-1.25-1.25 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0A1.252 1.252 0 0 1 3.25 8 1.266 1.266 0 0 1 2 6.75C2.306 5.1 2.841 3.501 3.591 2ZM17 18h-7v-6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H3V9.975c.084.006.164.025.25.025.84 0 1.646-.325 2.25-.907a3.244 3.244 0 0 0 4.5 0 3.244 3.244 0 0 0 4.5 0c.604.582 1.41.907 2.25.907.085 0 .166-.02.25-.027z" />
      <path d="M15 11h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-1 3h-1v-1h1z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgStore);
export default ForwardRef;
