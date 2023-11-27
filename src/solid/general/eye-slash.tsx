import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgEyeSlash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.972 8.972 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587" />
      <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.011a2.98 2.98 0 0 0-3.584 3.584c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.98 2.98 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588" />
      <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgEyeSlash);
export default ForwardRef;
