import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="#2F3039"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1v18M1 3.652v9c5.6-5.223 8.4 2.49 14-.08v-9c-5.6 2.57-8.4-5.143-14 .08"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
