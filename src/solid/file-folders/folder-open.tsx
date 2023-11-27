import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FolderOpen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M4.09 7.586A1 1 0 0 1 5 7h13V6a2 2 0 0 0-2-2h-4.557L9.043.8a2.009 2.009 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v14c.001.154.02.308.058.457z" />
      <path d="M6.05 9 2 17.952c.14.031.281.047.424.048h12.95a.992.992 0 0 0 .909-.594L20 9H6.05Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(FolderOpen);
export default ForwardRef;
