import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ForwardStep = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 1v14m-8.336-.479 6.5-5.774a1 1 0 0 0 0-1.494l-6.5-5.774A1 1 0 0 0 1 2.227v11.546a1 1 0 0 0 1.664.748Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ForwardStep);
export default ForwardRef;
