import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const StarHalfStroke = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 22 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 .8a1.5 1.5 0 0 0-.376.468L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L10 17.558V.8Zm10.925 6.825a1.526 1.526 0 0 0-1.239-1.044l-5.051-.734-2.259-4.577A1.51 1.51 0 0 0 12 .8v16.758l3.518 1.85a1.533 1.533 0 0 0 2.225-1.617l-.862-5.03L20.535 9.2a1.526 1.526 0 0 0 .39-1.575Z"
    />
  </svg>
);

const ForwardRef = forwardRef(StarHalfStroke);
export default ForwardRef;
