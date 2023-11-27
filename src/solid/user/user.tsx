import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
