import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Dna = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.041 11.862A5 5 0 0 1 11 15.831V19M1 1v3.169a5 5 0 0 0 1.891 3.916M11 1v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 1 15.831V19M1 3h10M1.399 6h9.252M2 14h8.652M1 17h10"
    />
  </svg>
);

const ForwardRef = forwardRef(Dna);
export default ForwardRef;
