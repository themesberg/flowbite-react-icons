import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPrint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="#2F2F38">
      <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1" />
      <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgPrint);
export default ForwardRef;
