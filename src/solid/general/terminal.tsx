import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTerminal = (
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
    <path
      fill="currentColor"
      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 14a1 1 0 0 1-.707-1.707L7.586 9 4.293 5.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 5 14m10 0h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTerminal);
export default ForwardRef;
