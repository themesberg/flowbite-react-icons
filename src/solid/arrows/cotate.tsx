import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Cotate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 9a1 1 0 0 0-1 1 6.993 6.993 0 0 1-11.89 5H7a1 1 0 0 0 0-2H2.236a1 1 0 0 0-.585.07c-.019.007-.037.011-.055.018-.018.007-.028.006-.04.014-.028.015-.044.042-.069.06A.984.984 0 0 0 1 14v5a1 1 0 1 0 2 0v-2.32A8.977 8.977 0 0 0 18 10a1 1 0 0 0-1-1M2 10a6.994 6.994 0 0 1 11.89-5H11a1 1 0 1 0 0 2h4.768a.992.992 0 0 0 .581-.07c.019-.007.037-.011.055-.018.018-.007.027-.006.04-.014.028-.015.044-.042.07-.06A.985.985 0 0 0 17 6V1a1 1 0 0 0-2 0v2.32A8.977 8.977 0 0 0 0 10a1 1 0 1 0 2 0"
    />
  </svg>
);

const ForwardRef = forwardRef(Cotate);
export default ForwardRef;
