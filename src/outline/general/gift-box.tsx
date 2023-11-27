import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgGiftBox = (
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
      d="M8 19v-9m3-4H5.5a2.5 2.5 0 1 1 0-5C7 1 8.375 2.25 9.375 3.5M12 19v-9m-9 0h14v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM2 6h16a1 1 0 0 1 1 1v3H1V7a1 1 0 0 1 1-1m12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgGiftBox);
export default ForwardRef;
