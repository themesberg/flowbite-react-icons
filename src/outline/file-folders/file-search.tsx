import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileSearch = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1v4a1 1 0 0 1-1 1H1m8.484 7.984 2.152 2.152M15 2v16a.969.969 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.969.969 0 0 1 15 2m-4.636 9.864a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFileSearch);
export default ForwardRef;
