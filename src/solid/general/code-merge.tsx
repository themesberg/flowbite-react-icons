import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCodeMerge = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 22"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 9a3 3 0 0 0-2.822 2.02L7 11.014A3.02 3.02 0 0 1 4 8V6.816a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0v-3.2a4.962 4.962 0 0 0 3 1.03l1.2.006A2.994 2.994 0 1 0 11 9"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCodeMerge);
export default ForwardRef;
