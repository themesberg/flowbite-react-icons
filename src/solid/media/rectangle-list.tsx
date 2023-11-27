import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgRectangleList = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2m0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRectangleList);
export default ForwardRef;
