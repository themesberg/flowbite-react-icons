import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const UserHeadset = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M12.079 4.839a3 3 0 0 0-4.255.1M11 18h1.083A3.916 3.916 0 0 0 16 14.083V7A6 6 0 1 0 4 7v7m7 4v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1m-7-4V8H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1z"
    />
  </svg>
);

const ForwardRef = forwardRef(UserHeadset);
export default ForwardRef;
