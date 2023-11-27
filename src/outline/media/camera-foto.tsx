import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CameraFoto = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
      <path d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(CameraFoto);
export default ForwardRef;
