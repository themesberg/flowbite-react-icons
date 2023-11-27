import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ArrowsRepeat1 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 19"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M17 9a1 1 0 0 0-1 1v3H1a1 1 0 0 0-.706 1.708l3 3a1 1 0 1 0 1.414-1.414L3.414 15H17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m2.923-4.618a1 1 0 0 0-.217-1.09l-3-3a1 1 0 0 0-1.414 1.414L16.586 3H3a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5h15a1 1 0 0 0 .923-.618" />
      <path d="M11 12a1 1 0 0 0 1-1V7a1 1 0 0 0-1.447-.895l-2 1a1 1 0 1 0 .894 1.79L10 8.618V11a1 1 0 0 0 1 1" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ArrowsRepeat1);
export default ForwardRef;
