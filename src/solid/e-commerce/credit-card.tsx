import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCreditCard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M2 12V6h16v6z" />
      <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgCreditCard);
export default ForwardRef;
