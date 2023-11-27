import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
