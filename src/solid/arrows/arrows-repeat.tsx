import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ArrowsRepeat = (
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
    <path
      fill="currentColor"
      d="M17 10a1 1 0 0 0-1 1v2H3.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.416l3 3a1 1 0 1 0 1.414-1.414L3.414 15H17a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m2.923-5.618a1 1 0 0 0-.217-1.09l-3-3a1 1 0 0 0-1.414 1.414L16.586 3H3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V5h12.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a.989.989 0 0 0 .216-.325"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowsRepeat);
export default ForwardRef;
