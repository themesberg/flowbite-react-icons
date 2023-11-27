import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FileLines = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2m-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2m0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(FileLines);
export default ForwardRef;
