import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFilePaste = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M6 18H2V3h3v1a1 1 0 0 0 0 2h2.758l2-2H7V2h3v1.779c.546-.5 1.26-.777 2-.779h5a2 2 0 0 0-2-2h-3.278A1.992 1.992 0 0 0 10 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4a.972.972 0 0 0 .474-.136A4.01 4.01 0 0 1 6 18" />
      <path d="M12 5a1 1 0 0 0-.707.293l-3 3A1 1 0 0 0 8 9h4z" />
      <path d="M18.067 5H14v4a2 2 0 0 1-2 2H8v7a1.969 1.969 0 0 0 1.933 2h8.134A1.97 1.97 0 0 0 20 18V7a1.97 1.97 0 0 0-1.933-2" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFilePaste);
export default ForwardRef;