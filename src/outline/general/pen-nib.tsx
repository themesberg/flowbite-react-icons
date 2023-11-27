import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgPenNib = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.338 12.276a1.614 1.614 0 1 0 0-3.228 1.614 1.614 0 0 0 0 3.228"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2.111 17.889 6.086-6.086m2.663-7.228 4.565 4.565-2.283 6.086L2.461 19 1 17.539 4.774 6.858l6.086-2.283Zm5.205 5.203-5.843-5.842L13.158 1 19 6.843zm-5.113.884a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPenNib);
export default ForwardRef;
