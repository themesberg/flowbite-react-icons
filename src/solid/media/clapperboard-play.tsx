import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ClapperboardPlay = (
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
      fill="currentColor"
      d="M2 2h4L3.75 5h2.5L8.5 2h1.715l-2.25 3h2.5l2.25-3h1.715l-2.25 3h2.5l2.25-3H18v3h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4h2zM0 7v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7zm12.76 6.458-4.818 3.43A.593.593 0 0 1 7 16.429V9.571a.593.593 0 0 1 .942-.459l4.818 3.43a.557.557 0 0 1 0 .916"
    />
  </svg>
);

const ForwardRef = forwardRef(ClapperboardPlay);
export default ForwardRef;
