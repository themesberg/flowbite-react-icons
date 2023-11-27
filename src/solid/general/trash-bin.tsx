import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const TrashBin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2M7 2h4v2H7zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(TrashBin);
export default ForwardRef;
