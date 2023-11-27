import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgTrashBin = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1M3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTrashBin);
export default ForwardRef;
