import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Printer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 13h12M4 13v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5M4 13v3H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-3M5 1h10a1 1 0 0 1 1 1v6H4V2a1 1 0 0 1 1-1"
    />
  </svg>
);

const ForwardRef = forwardRef(Printer);
export default ForwardRef;
