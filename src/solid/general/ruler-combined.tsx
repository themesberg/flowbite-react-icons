import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const RulerCombined = (
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
      fill="currentColor"
      d="M18 12h-1v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4H8v-1H4a1 1 0 0 1 0-2h4V7.961A.977.977 0 0 1 7.8 8H4a1 1 0 0 1 0-2h3.805c.068.006.135.02.2.039V5H4a1 1 0 0 1 0-2h4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v17a1 1 0 0 0 1 1h17a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M4.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
    />
  </svg>
);

const ForwardRef = forwardRef(RulerCombined);
export default ForwardRef;
