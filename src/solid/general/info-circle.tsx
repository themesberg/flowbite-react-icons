import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const InfoCircle = (
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
      fill="currentColor"
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5M9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(InfoCircle);
export default ForwardRef;
