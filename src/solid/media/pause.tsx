import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;
