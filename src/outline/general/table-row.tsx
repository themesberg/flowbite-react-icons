import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTableRow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 8a1 1 0 0 0 0 2zm18 2a1 1 0 1 0 0-2zM2 2h16V0H2zm16 0h2a2 2 0 0 0-2-2zm0 0v10h2V2zm0 10v2a2 2 0 0 0 2-2zm0 0H2v2h16zM2 12H0a2 2 0 0 0 2 2zm0 0V2H0v10zM2 2V0a2 2 0 0 0-2 2zm0 4h17V4H2zm9 7V6H9v7zM1 10h18V8H1z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTableRow);
export default ForwardRef;
