import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-5.5 17h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTablet);
export default ForwardRef;
