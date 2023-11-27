import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArchiveDownload = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="#2F2F38"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 8v4m0 0-2-2m2 2 2-2M3 5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5zM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArchiveDownload);
export default ForwardRef;
