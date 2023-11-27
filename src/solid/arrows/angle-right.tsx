import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgAngleRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 8 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.386 5.583 1.697.253a.997.997 0 0 0-1.66.768 1 1 0 0 0 .297.692l5.63 5.27-5.63 5.27a1 1 0 0 0 1.032 1.676.998.998 0 0 0 .331-.216l5.688-5.326a1.908 1.908 0 0 0 0-2.808z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAngleRight);
export default ForwardRef;
