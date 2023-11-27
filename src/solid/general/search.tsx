import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Search = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m11.707 2.793-4-4a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414"
    />
  </svg>
);

const ForwardRef = forwardRef(Search);
export default ForwardRef;
