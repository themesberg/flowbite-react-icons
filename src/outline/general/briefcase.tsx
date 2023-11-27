import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBriefcase = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 1V0zm4 0V0zm2 4v1h1V5zM6 5H5v1h1zm2-3h4V0H8zm4 0a1 1 0 0 1 .707.293L14.121.879A3 3 0 0 0 12 0zm.707.293A1 1 0 0 1 13 3h2a3 3 0 0 0-.879-2.121zM13 3v2h2V3zm1 1H6v2h8zM7 5V3H5v2zm0-2a1 1 0 0 1 .293-.707L5.879.879A3 3 0 0 0 5 3zm.293-.707A1 1 0 0 1 8 2V0a3 3 0 0 0-2.121.879l1.414 1.414ZM2 6h16V4H2zm16 0h2a2 2 0 0 0-2-2zm0 0v12h2V6zm0 12v2a2 2 0 0 0 2-2zm0 0H2v2h16zM2 18H0a2 2 0 0 0 2 2zm0 0V6H0v12zM2 6V4a2 2 0 0 0-2 2zm16.293 3.293C16.557 11.029 13.366 12 10 12c-3.366 0-6.557-.97-8.293-2.707L.293 10.707C2.557 12.971 6.366 14 10 14c3.634 0 7.444-1.03 9.707-3.293l-1.414-1.414ZM10 9v2a2 2 0 0 0 2-2zm0 0H8a2 2 0 0 0 2 2zm0 0V7a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
