import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgClipboard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2m0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgClipboard);
export default ForwardRef;
