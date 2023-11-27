import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgParagraph = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="#2F3039"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 1v18m5.143-18v18M19 1H5.5a4.5 4.5 0 0 0 0 9H10"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgParagraph);
export default ForwardRef;
