import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgLightbulb = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7m0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLightbulb);
export default ForwardRef;
