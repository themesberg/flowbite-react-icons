import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgAnnotation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2m5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAnnotation);
export default ForwardRef;
