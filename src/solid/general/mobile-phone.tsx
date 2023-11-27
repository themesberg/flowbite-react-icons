import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgMobilePhone = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 20"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2M12 13H2V4h10z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMobilePhone);
export default ForwardRef;
