import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChartPie = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 21"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M9 4.025A7.5 7.5 0 1 0 16.975 12H9z" />
      <path d="M12.5 1c-.169 0-.334.014-.5.025V9h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 12.5 1" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
