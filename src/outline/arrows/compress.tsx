import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCompress = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16.922V13.13h4M1 5.549h4v-3.79M1 13.13h4v3.79m8-15.163V5.55h4"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCompress);
export default ForwardRef;
