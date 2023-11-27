import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgAddressCard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2m0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2m0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAddressCard);
export default ForwardRef;
