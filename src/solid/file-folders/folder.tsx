import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
