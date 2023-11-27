import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTableColumn = (
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
      d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M2 6h7v6H2zm9 6V6h7v6z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTableColumn);
export default ForwardRef;
