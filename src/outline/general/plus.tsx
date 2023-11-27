import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1v16M1 9h16"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
