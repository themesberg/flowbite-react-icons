import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ZoomOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 19-4-4M5 8h6m4 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
    />
  </svg>
);

const ForwardRef = forwardRef(ZoomOut);
export default ForwardRef;
