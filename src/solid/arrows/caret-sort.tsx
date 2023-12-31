import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const CaretSort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 12 21"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M2.574 10.024h6.852a2.074 2.074 0 0 0 1.847-1.086 1.899 1.899 0 0 0-.11-1.986L7.736 1.9a2.122 2.122 0 0 0-3.472 0L.837 6.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H2.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.122 2.122 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.073 2.073 0 0 0-1.846-1.087Z"
    />
  </svg>
);

const ForwardRef = forwardRef(CaretSort);
export default ForwardRef;
