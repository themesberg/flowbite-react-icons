import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCaretDown = (
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
      d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCaretDown);
export default ForwardRef;
