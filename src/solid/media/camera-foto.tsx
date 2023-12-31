import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CameraFoto = (
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
      d="M17 2h-1.382l-.171-.342A2.985 2.985 0 0 0 12.764 0H7.236a2.984 2.984 0 0 0-2.683 1.658L4.382 2H3a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a3 3 0 0 0-3-3m-3.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
    />
  </svg>
);

const ForwardRef = forwardRef(CameraFoto);
export default ForwardRef;
