import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const TextSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 2.323v-1h10v1m-5-1v12m-2 0h4m3-6v-1h6v1m-3-1v7m-1 0h2"
    />
  </svg>
);

const ForwardRef = forwardRef(TextSize);
export default ForwardRef;
