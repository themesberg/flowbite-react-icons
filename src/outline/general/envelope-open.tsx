import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const EnvelopeOpen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 8v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8M1 8a1 1 0 0 1 .4-.8l8-5.75a1 1 0 0 1 1.2 0l8 5.75a1 1 0 0 1 .4.8M1 8l8.4 6.05a1 1 0 0 0 1.2 0L19 8"
    />
  </svg>
);

const ForwardRef = forwardRef(EnvelopeOpen);
export default ForwardRef;
