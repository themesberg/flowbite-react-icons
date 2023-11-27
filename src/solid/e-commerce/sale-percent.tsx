import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgSalePercent = (
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
      d="M18.435 7.546A2.319 2.319 0 0 1 17.7 5.77a3.357 3.357 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.358 3.358 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981A3.372 3.372 0 0 0 2.3 5.77a2.32 2.32 0 0 1-.736 1.776 3.36 3.36 0 0 0 0 4.908 2.318 2.318 0 0 1 .736 1.775A3.356 3.356 0 0 0 5.77 17.7a2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.317 2.317 0 0 1 .736-1.775 3.36 3.36 0 0 0 0-4.908v-.001ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSalePercent);
export default ForwardRef;
