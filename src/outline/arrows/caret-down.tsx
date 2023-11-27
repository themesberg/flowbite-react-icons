import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgCaretDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 10"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.707 2.97 5.586 5.295c.188.177.442.277.707.277.265 0 .52-.1.707-.277l5.586-5.294a.934.934 0 0 0 .274-.486.902.902 0 0 0-.057-.547.96.96 0 0 0-.369-.425 1.04 1.04 0 0 0-.555-.16H2.414a1.04 1.04 0 0 0-.555.16.96.96 0 0 0-.369.425.902.902 0 0 0-.057.547.933.933 0 0 0 .274.486Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCaretDown);
export default ForwardRef;
