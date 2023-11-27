import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgMessageCaption = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2M5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2m2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMessageCaption);
export default ForwardRef;
