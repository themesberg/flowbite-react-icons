import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Newspapper = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2zM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4z"
    />
  </svg>
);

const ForwardRef = forwardRef(Newspapper);
export default ForwardRef;
