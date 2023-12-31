import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const LockTime = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 14.5a6.474 6.474 0 0 1 8-6.318V8a1 1 0 0 0-1-1h-2.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9.052A6.494 6.494 0 0 1 8 14.5m-2.5-10a2.5 2.5 0 1 1 5 0V7h-5z"
    />
    <path
      fill="currentColor"
      d="M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m2.06 6.561a1 1 0 0 1-1.414 0l-1.353-1.354a1 1 0 0 1-.293-.707v-1.858a1 1 0 0 1 2 0v1.444l1.06 1.06a1.001 1.001 0 0 1 0 1.415"
    />
  </svg>
);

const ForwardRef = forwardRef(LockTime);
export default ForwardRef;
