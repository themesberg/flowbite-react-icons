import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 12"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.923 6.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L10.586 5H1a1 1 0 0 0 0 2h9.586L8.293 9.293a1 1 0 1 0 1.414 1.414l4-4a.999.999 0 0 0 .216-.325Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
