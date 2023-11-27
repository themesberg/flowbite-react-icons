import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgVolumeDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M10.836.357a1.978 1.978 0 0 0-2.138.3L3.63 5H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.63l5.07 4.344a1.985 1.985 0 0 0 2.142.299A1.98 1.98 0 0 0 12 15.826V2.174A1.98 1.98 0 0 0 10.836.357m4.112 4.985a1 1 0 1 0-1.674 1.095 4.887 4.887 0 0 1 0 5.126 1 1 0 1 0 1.674 1.095A6.645 6.645 0 0 0 16 9a6.65 6.65 0 0 0-1.052-3.658"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgVolumeDown);
export default ForwardRef;
