import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgSwatchbook = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1M3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSwatchbook);
export default ForwardRef;
