import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgComputerSpeaker = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1m6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComputerSpeaker);
export default ForwardRef;
