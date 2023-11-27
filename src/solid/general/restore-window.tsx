import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const RestoreWindow = (
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
    <g fill="currentColor">
      <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2" />
      <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M2 16v-6h12v6z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(RestoreWindow);
export default ForwardRef;
