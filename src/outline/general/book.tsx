import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Book = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"
    />
  </svg>
);

const ForwardRef = forwardRef(Book);
export default ForwardRef;
