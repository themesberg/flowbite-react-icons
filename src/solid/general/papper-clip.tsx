import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const PapperClip = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 20a6.006 6.006 0 0 1-6-6V6a1 1 0 0 1 2 0v8a4 4 0 1 0 8 0V4.5a2.5 2.5 0 1 0-5 0V14a1 1 0 1 0 2 0V6a1 1 0 0 1 2 0v8a3 3 0 0 1-6 0V4.5a4.5 4.5 0 0 1 9 0V14a6.006 6.006 0 0 1-6 6"
    />
  </svg>
);

const ForwardRef = forwardRef(PapperClip);
export default ForwardRef;
