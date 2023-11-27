import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCaretUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 10"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.207 1a2 2 0 0 0-2.828 0L.793 6.586A2 2 0 0 0 2.207 10h11.172a2 2 0 0 0 1.414-3.414z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCaretUp);
export default ForwardRef;
