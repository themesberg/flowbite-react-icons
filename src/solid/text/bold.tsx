import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Bold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.011 7.279A4.448 4.448 0 0 0 12 4.5 4.5 4.5 0 0 0 7.5 0H1a1 1 0 0 0 0 2h1v12H1a1 1 0 0 0 0 2h8.5a4.49 4.49 0 0 0 1.511-8.721M10 4.5A2.5 2.5 0 0 1 7.5 7H4V2h3.5A2.5 2.5 0 0 1 10 4.5M9.5 14H4V9h5.5a2.5 2.5 0 0 1 0 5"
    />
  </svg>
);

const ForwardRef = forwardRef(Bold);
export default ForwardRef;
