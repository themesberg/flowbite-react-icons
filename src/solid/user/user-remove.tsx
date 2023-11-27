import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUserRemove = (
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
      fill="currentColor"
      d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5m11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUserRemove);
export default ForwardRef;
