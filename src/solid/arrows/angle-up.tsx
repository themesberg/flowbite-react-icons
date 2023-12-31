import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const AngleUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 8"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13 8a.992.992 0 0 1-.73-.317L7 2.042 1.73 7.683A1 1 0 0 1 .27 6.317l5.326-5.7a1.972 1.972 0 0 1 2.808 0l5.326 5.7A1 1 0 0 1 13 8"
    />
  </svg>
);

const ForwardRef = forwardRef(AngleUp);
export default ForwardRef;
