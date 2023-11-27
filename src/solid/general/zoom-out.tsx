import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgZoomOut = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="m19.707 18.293-4-4a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414M8 .5A7.5 7.5 0 1 0 15.5 8 7.508 7.508 0 0 0 8 .5M11 9H5a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgZoomOut);
export default ForwardRef;
