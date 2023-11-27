import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgNpm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F3039"
      stroke="#2F3039"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1.87H1v16h8v-13h5v13h3v-16H9Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgNpm);
export default ForwardRef;
