import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M9 6v2H2V6zm2 0h7v2h-7zm-9 4h7v2H2zm9 2v-2h7v2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;
