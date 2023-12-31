import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Pallete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 21"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.817 9.085a10 10 0 0 0-19.769 2.9A10.108 10.108 0 0 0 6.761 20a9.689 9.689 0 0 0 4.2 1h.012a3.011 3.011 0 0 0 2.144-.884A2.97 2.97 0 0 0 14 18v-.86A1.041 1.041 0 0 1 15 16h2.7a2.975 2.975 0 0 0 2.838-2.024 9.93 9.93 0 0 0 .279-4.891ZM5.5 12a1 1 0 1 1 0-2.001A1 1 0 0 1 5.5 12m2.707-3.793a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414m2.872-1.624a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4.128 1.624a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414"
    />
  </svg>
);

const ForwardRef = forwardRef(Pallete);
export default ForwardRef;
