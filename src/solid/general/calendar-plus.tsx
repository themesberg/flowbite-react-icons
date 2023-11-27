import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCalendarPlus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F3039"
      d="M20.922 4.034a2 2 0 0 0-2-2h-2v-1a1 1 0 0 0-2 0v1h-3v-1a1 1 0 0 0-2 0v1h-3v-1a1 1 0 0 0-2 0v1h-2a2 2 0 0 0-2 2v2h20zm-20 4v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-10h-20m12 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCalendarPlus);
export default ForwardRef;
