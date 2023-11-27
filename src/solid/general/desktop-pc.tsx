import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const DesktopPc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7zM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2z"
    />
  </svg>
);

const ForwardRef = forwardRef(DesktopPc);
export default ForwardRef;
