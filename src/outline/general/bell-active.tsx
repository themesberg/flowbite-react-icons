import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBellActive = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 21"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.046 3.59-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.439 2.345 2.383 2.588 2.599 3.761.11.586.22 1.171-.309 1.271L5 17.101c-.529.099-.639-.488-.749-1.074-.219-1.172 1.506-2.102 1.067-4.447l-.331-1.769A5.338 5.338 0 0 1 9.046 3.59m-7.13 4.602a8.472 8.472 0 0 1 2.17-5.048m2.646 13.633A3.472 3.472 0 0 0 13.46 16l.089-.5-6.817 1.277Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBellActive);
export default ForwardRef;
