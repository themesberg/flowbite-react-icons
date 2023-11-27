import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFolderArrowRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6zm10 4 2 2-2 2m1.5-2H4.781"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFolderArrowRight);
export default ForwardRef;
