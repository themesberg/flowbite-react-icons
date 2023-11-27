import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <g fill="#2F2F38">
      <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4zM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4" />
      <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-4.5 3.5a1 1 0 1 1 0-2.002 1 1 0 0 1 0 2.002M12.62 4h2.78L12.539.409a1.086 1.086 0 1 0-1.7 1.353z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
