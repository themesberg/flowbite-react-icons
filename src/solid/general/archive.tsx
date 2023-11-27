import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgArchive = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1M2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;
