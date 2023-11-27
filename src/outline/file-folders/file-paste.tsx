import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FilePaste = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 5h2m1.5 0H6V2m0 0a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h4a1 1 0 0 1 1 1M6 2H2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h4m7-13v4H9m10-3v11a.969.969 0 0 1-.933 1H9.933A.97.97 0 0 1 9 18V9l3-3h6.067A.969.969 0 0 1 19 7"
    />
  </svg>
);

const ForwardRef = forwardRef(FilePaste);
export default ForwardRef;
