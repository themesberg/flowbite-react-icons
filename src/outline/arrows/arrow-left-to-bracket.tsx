import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowLeftToBracket = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 7.64h11m0 0L8 3.85m4 3.79-4 3.791m4-10.424h3c.53 0 1.04.2 1.414.555.375.355.586.837.586 1.34v9.477c0 .503-.21.985-.586 1.34a2.057 2.057 0 0 1-1.414.556h-3"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowLeftToBracket);
export default ForwardRef;
