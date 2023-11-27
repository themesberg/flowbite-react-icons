import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgMessages = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#fff"
      d="M8 5h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      d="M18 4h-2v5a4 4 0 0 1-4 4H9l-2.162 1.621c.338.245.744.378 1.162.379h3.667l3.733 2.8A1 1 0 0 0 17 17v-2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
    />
    <path
      fill="#fff"
      d="M12 1H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"
    />
    <path
      fill="currentColor"
      d="M4 14a1 1 0 0 1-1-1v-2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.333L4.6 13.8a1 1 0 0 1-.6.2Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;
