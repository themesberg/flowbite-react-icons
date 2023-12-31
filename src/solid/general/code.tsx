import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Code = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.707 3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L2.414 8l3.293-3.293a1 1 0 0 0 0-1.414Zm14 4-4-4a1 1 0 1 0-1.414 1.414L17.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414ZM11.142.01a1 1 0 0 0-1.132.848l-2 14a1 1 0 1 0 1.98.284l2-14A1 1 0 0 0 11.142.01Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Code);
export default ForwardRef;
