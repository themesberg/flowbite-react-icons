import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgLetterItalic = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.874 15 6.143-14M1 15h6.33M6.67 1H13"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLetterItalic);
export default ForwardRef;
