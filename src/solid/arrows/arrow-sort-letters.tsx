import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowSortLetters = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F3039"
      d="M4.708.294a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.415 1.413L3 3.414V17a1 1 0 1 0 2 0V3.414l1.293 1.293a1 1 0 0 0 1.414-1.414L4.708.294ZM11 2h3.586l-4.293 4.293A1 1 0 0 0 11 8h6a1 1 0 1 0 0-2h-3.586l4.293-4.293A1 1 0 0 0 17 0h-6a1 1 0 1 0 0 2m3.4 7.553a1.043 1.043 0 0 0-1.79 0l-3.5 7a1 1 0 0 0 1.79.894L11.618 16h3.764l.723 1.447a1 1 0 0 0 1.79-.894l-3.495-7ZM12.618 14l.882-1.764.882 1.764z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowSortLetters);
export default ForwardRef;
