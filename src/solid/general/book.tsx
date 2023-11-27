import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2M4 2h2v12H4zm8 16H3a1 1 0 0 1 0-2h9z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBook);
export default ForwardRef;
