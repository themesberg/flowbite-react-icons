import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCommand = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 6h8M6 6v8m0-8V3.5A2.5 2.5 0 1 0 3.5 6zm8 0v8m0-8h2.5A2.5 2.5 0 1 0 14 3.5zm0 8H6m8 0h2.5a2.5 2.5 0 1 1-2.5 2.5zm-8 0H3.5A2.5 2.5 0 1 0 6 16.5z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCommand);
export default ForwardRef;
