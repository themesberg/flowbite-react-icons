import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const StarHalf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10.468 1.712-2.631 4.8a.589.589 0 0 1-.446.292l-5.882.766a.522.522 0 0 0-.329.911l4.256 3.734a.5.5 0 0 1 .171.473l-1 5.272a.583.583 0 0 0 .861.563l5.261-2.489a.641.641 0 0 1 .271-.061V1.414a.6.6 0 0 0-.532.298Z"
    />
  </svg>
);

const ForwardRef = forwardRef(StarHalf);
export default ForwardRef;
