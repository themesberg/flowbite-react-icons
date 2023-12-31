import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const TextCenter = (
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
      fill="currentColor"
      d="M11 2H3a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2m2 4H1a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2m-2 4H3a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2m2 4H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(TextCenter);
export default ForwardRef;
