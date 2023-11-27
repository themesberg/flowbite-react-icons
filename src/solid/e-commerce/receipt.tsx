import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Receipt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 14 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2m0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2"
    />
  </svg>
);

const ForwardRef = forwardRef(Receipt);
export default ForwardRef;
