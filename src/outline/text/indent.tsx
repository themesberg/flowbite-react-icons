import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Indent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1 1.323h12m-5 4h5m-5 4h5m-12 4h12m-12-8v4l3-2z"
    />
  </svg>
);

const ForwardRef = forwardRef(Indent);
export default ForwardRef;
