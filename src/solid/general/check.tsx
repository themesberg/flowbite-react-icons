import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 12"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.667 11.875h-.015a1 1 0 0 1-.714-.314L.272 6.6a1 1 0 1 1 1.456-1.372l3.959 4.207 8.6-8.643a1 1 0 1 1 1.418 1.41l-9.33 9.378a.991.991 0 0 1-.708.295Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
