import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const DrawSquare = (
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
      d="M5 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1m14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1M5 14H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M12 2H8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2m0 14H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-8-4V8a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0m14 0V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0"
    />
  </svg>
);

const ForwardRef = forwardRef(DrawSquare);
export default ForwardRef;
