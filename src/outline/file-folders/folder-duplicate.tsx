import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FolderDuplicate = (
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
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 8H2a1 1 0 0 0-1 1v9M15 8a1 1 0 0 1 1 1m-1-1H9.943M15 8a1 1 0 0 1 1 1m0 0v9m0 0a1 1 0 0 1-1 1m1-1a1 1 0 0 1-1 1m0 0H2m0 0a1 1 0 0 1-1-1m1 1a1 1 0 0 1-1-1m0 0V5m0 0a1 1 0 0 1 1-1h4.443a1 1 0 0 1 .8.4l2.7 3.6M1 5v3h8.943M16 16h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.057l-2.7-3.6a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1v1"
    />
  </svg>
);

const ForwardRef = forwardRef(FolderDuplicate);
export default ForwardRef;
