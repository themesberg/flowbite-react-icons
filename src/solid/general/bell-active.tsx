import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBellActive = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 19 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.012 13.453c-.219-1.173-2.163-1.416-2.6-3.761l-.041-.216c0 .006 0-.005-.007-.038v.021l-.017-.091-.005-.024v-.006l-.265-1.418a5.406 5.406 0 0 0-5.051-4.408.973.973 0 0 0 0-.108L9.6 1.082a1 1 0 0 0-1.967.367l.434 2.325c.01.034.024.067.039.1A5.409 5.409 0 0 0 4.992 9.81l.266 1.418c0-.012 0 0 .007.037v-.007l.006.032.009.046v-.011l.007.039.04.215c.439 2.345-1.286 3.275-1.067 4.447.11.586.22 1.173.749 1.074l12.7-2.377c.523-.098.413-.684.303-1.27ZM1.917 9.191h-.074a1 1 0 0 1-.924-1.07 9.446 9.446 0 0 1 2.426-5.648 1 1 0 1 1 1.482 1.343 7.466 7.466 0 0 0-1.914 4.449 1 1 0 0 1-.996.926Zm5.339 8.545A3.44 3.44 0 0 0 10 19.1a3.478 3.478 0 0 0 3.334-2.5l-6.078 1.136Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBellActive);
export default ForwardRef;
