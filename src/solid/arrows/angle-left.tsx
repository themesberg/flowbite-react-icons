import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const AngleLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 8 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.985 14a.992.992 0 0 1-.681-.27L.614 8.408a1.905 1.905 0 0 1 0-2.803L6.304.286a.998.998 0 1 1 1.363 1.458L2.038 7.01l5.629 5.263A.998.998 0 0 1 6.985 14"
    />
  </svg>
);

const ForwardRef = forwardRef(AngleLeft);
export default ForwardRef;
