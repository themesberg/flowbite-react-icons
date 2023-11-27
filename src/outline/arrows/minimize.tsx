import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Minimize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 18"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1.758 5.243 5.78M17 1.76l-4.243 4.02M17 16.922 12.757 12.9M1 16.922 5.243 12.9M6 2.706v3.79H2m4 9.478v-3.791H2m10-9.477v3.79h4m-4 9.478v-3.791h4"
    />
  </svg>
);

const ForwardRef = forwardRef(Minimize);
export default ForwardRef;
