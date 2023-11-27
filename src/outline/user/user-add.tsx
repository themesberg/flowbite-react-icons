import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUserAdd = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUserAdd);
export default ForwardRef;