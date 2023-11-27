import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 7 3-3-3-3m0 12H5.5a4.5 4.5 0 1 1 0-9H14"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
