import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgClone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M6 5a3 3 0 0 1 .183-1H5a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 0 9h6zm0 9v-3H0v7a1.97 1.97 0 0 0 1.934 2h7.132A1.97 1.97 0 0 0 11 18H9.933A3.97 3.97 0 0 1 6 14m7-14a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 8 5h5z" />
      <path d="M18.066 0H15v6a1 1 0 0 1-1 1H8v7a1.97 1.97 0 0 0 1.934 2h8.132A1.97 1.97 0 0 0 20 14V2a1.97 1.97 0 0 0-1.934-2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgClone);
export default ForwardRef;
