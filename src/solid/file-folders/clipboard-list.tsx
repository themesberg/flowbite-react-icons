import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ClipboardList = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M7 2h4v2H7zM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 4H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2m0-4H8a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(ClipboardList);
export default ForwardRef;
