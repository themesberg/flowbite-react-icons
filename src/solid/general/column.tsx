import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Column = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3V0zm16 0h-3v16h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-5 0H7v16h6z"
    />
  </svg>
);

const ForwardRef = forwardRef(Column);
export default ForwardRef;
