import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F3039"
      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
