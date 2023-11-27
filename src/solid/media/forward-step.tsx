import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgForwardStep = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 0a1 1 0 0 0-1 1v5.7a2.026 2.026 0 0 0-.177-.194L3.329.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773c.062-.062.119-.128.172-.197V15a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgForwardStep);
export default ForwardRef;
