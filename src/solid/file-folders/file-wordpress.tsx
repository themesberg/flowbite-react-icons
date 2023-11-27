import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FileWordpress = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5z" />
      <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2m-3.081 16.165a1 1 0 0 1-1.881.282L8 14.236l-1.1 2.211a1 1 0 0 1-1.881-.282l-1-6a1 1 0 0 1 1.972-.33l.495 2.967.624-1.249a1.042 1.042 0 0 1 1.79 0l.624 1.249.495-2.967a1 1 0 0 1 1.972.33l-1.005 6Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(FileWordpress);
export default ForwardRef;
