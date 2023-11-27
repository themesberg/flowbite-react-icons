import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Lock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 16 20"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(Lock);
export default ForwardRef;
