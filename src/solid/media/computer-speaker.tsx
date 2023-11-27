import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgComputerSpeaker = (
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
    <g fill="currentColor">
      <path d="M14 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path d="M18 5h-8a2 2 0 0 0-2 2v11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2m-4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 9a3 3 0 1 1 0-5.999A3 3 0 0 1 14 17" />
      <path d="M6 9H2V2h16v1c.65.005 1.289.17 1.86.48A.971.971 0 0 0 20 3V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgComputerSpeaker);
export default ForwardRef;
