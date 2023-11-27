import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Npm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1.87H1v16h8v-13h5v13h3v-16H9Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Npm);
export default ForwardRef;
