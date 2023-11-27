import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Cash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"
    />
    <path
      fill="currentColor"
      d="M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2"
    />
    <path d="M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </svg>
);

const ForwardRef = forwardRef(Cash);
export default ForwardRef;
