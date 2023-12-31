import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CodeFork = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 22"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 4a3 3 0 1 0-4 2.816V9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6.816a3 3 0 1 0-2 0V9a3 3 0 0 0 3 3h2v3.184a3 3 0 1 0 2 0V12h2a3 3 0 0 0 3-3V6.816A3 3 0 0 0 16 4"
    />
  </svg>
);

const ForwardRef = forwardRef(CodeFork);
export default ForwardRef;
