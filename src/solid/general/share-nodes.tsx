import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ShareNodes = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.419 10.581a3.566 3.566 0 0 0-2.574 1.1L7.089 9.19a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.427L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.581 3.581 0 1 0 3.508-2.871"
    />
  </svg>
);

const ForwardRef = forwardRef(ShareNodes);
export default ForwardRef;
