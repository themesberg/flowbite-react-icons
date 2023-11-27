import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const List = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 10"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.5 0h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m0 4h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5m0 4h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5M15 2H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2m0 4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2m0 4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(List);
export default ForwardRef;
