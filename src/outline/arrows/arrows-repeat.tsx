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
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 13.38 3-2.844m-3 2.843 3 2.843M1 13.38h16v-2.843m2-6.634-3 2.843m3-2.843L16 1.06m3 2.843H3v2.843"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowsRepeat);
export default ForwardRef;
