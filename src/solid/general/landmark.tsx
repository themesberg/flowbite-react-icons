import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Landmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M2 15a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2h-1V9h1a1 1 0 0 0 1-1V7a.999.999 0 0 0-.4-.8l-8-6a1 1 0 0 0-1.2 0l-8 6A1 1 0 0 0 1 7v1a1 1 0 0 0 1 1h1v6zm7 0V9h2v6zm6 0h-2V9h2zM5 9h2v6H5zm14 9H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"
    />
  </svg>
);

const ForwardRef = forwardRef(Landmark);
export default ForwardRef;
