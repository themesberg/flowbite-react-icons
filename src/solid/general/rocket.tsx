import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgRocket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.115 1.115 0 0 0 1.89.63l2.361-2.362.38-4.475zm8.617-14.283A1.614 1.614 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.631 2.631 0 1 1-3.72-3.722 2.631 2.631 0 0 1 3.72 3.722Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRocket);
export default ForwardRef;