import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChartPie = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 21"
    ref={ref}
    {...props}
  >
    <g fill="#2F2F38">
      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039 1 1 0 0 0-1-1.066h.002Z" />
      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
