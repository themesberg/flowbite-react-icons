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
      stroke="#2F2F38"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCirclePause);
export default ForwardRef;
