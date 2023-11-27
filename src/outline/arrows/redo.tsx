import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7 1 4l3-3m0 12h6.5a4.5 4.5 0 1 0 0-9H2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
