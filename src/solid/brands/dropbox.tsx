import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgDropbox = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 19"
    ref={ref}
    {...props}
  >
    <g fill="#2F2F38">
      <path d="M10.013 4.175 5.006 7.369l5.007 3.194-5.007 3.193L0 10.545l5.006-3.193L0 4.175 5.006.981zM4.981 15.806l5.006-3.193 5.006 3.193L9.987 19l-5.006-3.194" />
      <path d="m10.013 10.545 5.006-3.194-5.006-3.176 4.98-3.194L20 4.175l-5.007 3.194L20 10.562l-5.007 3.194z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDropbox);
export default ForwardRef;
