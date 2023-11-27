import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgListMusic = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 16"
    ref={ref}
    {...props}
  >
    <g fill="#2F2F38">
      <path d="M14.316.051A1 1 0 0 0 13 1v8.473A4.49 4.49 0 0 0 11 9c-2.206 0-4 1.525-4 3.4s1.794 3.4 4 3.4 4-1.526 4-3.4a2.945 2.945 0 0 0-.067-.566c.041-.107.064-.22.067-.334V2.763A2.974 2.974 0 0 1 16 5a1 1 0 0 0 2 0C18 1.322 14.467.1 14.316.051ZM10 3H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2" />
      <path d="M10 7H1a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2m-5 4H1a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgListMusic);
export default ForwardRef;
