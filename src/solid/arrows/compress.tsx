import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Compress = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13 18a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1M5 6H1a1 1 0 0 1 0-2h3V1a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m0 12a1 1 0 0 1-1-1v-3H1a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1M17 6h-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(Compress);
export default ForwardRef;
