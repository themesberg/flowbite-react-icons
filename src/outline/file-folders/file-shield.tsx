import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileShield = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.783 19h-6.85A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v2.478M6 1v4a1 1 0 0 1-1 1H1m13.056 13a11.337 11.337 0 0 1-4.889-9.167L14.056 8l4.888 1.833A11.336 11.336 0 0 1 14.056 19"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFileShield);
export default ForwardRef;
