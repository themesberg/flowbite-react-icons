import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgOutdent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="#2F3039"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h12M8 5h5M8 9h5M1 13h12M4 5v4L1 7z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgOutdent);
export default ForwardRef;
