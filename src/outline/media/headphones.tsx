import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgHeadphones = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 13v-3a9 9 0 1 0-18 0v3m2-3h3v7H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m11 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgHeadphones);
export default ForwardRef;
