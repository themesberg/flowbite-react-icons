import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const AngleLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 8 15"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 1.654 1.3 6.7a.865.865 0 0 0-.22.29.823.823 0 0 0 0 .698.85.85 0 0 0 .22.29L7 13.026"
    />
  </svg>
);

const ForwardRef = forwardRef(AngleLeft);
export default ForwardRef;
