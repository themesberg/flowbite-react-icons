import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArrowBig = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m20.033 7.431-4.846-7A1 1 0 0 0 14.364 0H1.211a1 1 0 0 0-.822 1.569L4.842 8 .389 14.431A1 1 0 0 0 1.211 16h13.153a1.001 1.001 0 0 0 .823-.431l4.846-7a1 1 0 0 0 0-1.138Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowBig);
export default ForwardRef;
