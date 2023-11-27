import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBars = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 17 14"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBars);
export default ForwardRef;
