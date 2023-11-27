import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgShareAll = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 14"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.717 1.458 5.518 4.69a.998.998 0 0 1 .252.334.951.951 0 0 1 0 .802.998.998 0 0 1-.252.333l-5.612 4.822m-5.73-3.046v1.53a.86.86 0 0 0 .105.506.925.925 0 0 0 .38.37.994.994 0 0 0 1.04-.075l5.108-4.029c.116-.097.21-.218.273-.352a.997.997 0 0 0 0-.855 1.048 1.048 0 0 0-.273-.353L9.418 2.107a.994.994 0 0 0-1.04-.074.925.925 0 0 0-.38.369.86.86 0 0 0-.105.506V4.52c-3.312 0-6 2.823-6 6.306v1.26a.636.636 0 0 0 .112.457.7.7 0 0 0 .404.273c.165.041.34.023.493-.05a.678.678 0 0 0 .335-.346 4.966 4.966 0 0 1 1.853-2.166 5.371 5.371 0 0 1 2.799-.858l.004-.003Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgShareAll);
export default ForwardRef;
