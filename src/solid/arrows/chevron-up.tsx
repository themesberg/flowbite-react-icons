import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ChevronUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 6"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.001 5.988a1 1 0 0 1-.706-.293L5.006 2.41 1.717 5.695a.999.999 0 1 1-1.412-1.41L4.3.291a1 1 0 0 1 1.412 0l3.996 3.992A.998.998 0 0 1 9 5.988Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ChevronUp);
export default ForwardRef;
