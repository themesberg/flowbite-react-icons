import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const AlignCenter = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 14"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 1h8M1 5h12M3 9h8M1 13h12"
    />
  </svg>
);

const ForwardRef = forwardRef(AlignCenter);
export default ForwardRef;
