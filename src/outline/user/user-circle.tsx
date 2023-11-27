import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const UserCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19m3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);

const ForwardRef = forwardRef(UserCircle);
export default ForwardRef;
