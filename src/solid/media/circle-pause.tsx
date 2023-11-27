import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCirclePause = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5M9 13a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCirclePause);
export default ForwardRef;
