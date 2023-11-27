import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const BadgeCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 22 22"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 11 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9A2 2 0 0 1 18 7.272V6a2 2 0 0 0-2-2h-1.272a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9A2 2 0 0 1 7.272 4H6a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9A2 2 0 0 1 4 14.728V16a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9A2 2 0 0 1 14.728 18H16a2 2 0 0 0 2-2v-1.272a2 2 0 0 1 .586-1.414"
    />
  </svg>
);

const ForwardRef = forwardRef(BadgeCheck);
export default ForwardRef;
