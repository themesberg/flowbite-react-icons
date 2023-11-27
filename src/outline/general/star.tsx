import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.911l-3.83 3.734a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.489a.536.536 0 0 0-.5 0l-4.73 2.486a.535.535 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473l-3.83-3.734a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
