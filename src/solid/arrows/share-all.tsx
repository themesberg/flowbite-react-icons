import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const ShareAll = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 21 15"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14.922 7.759a1.56 1.56 0 0 0-.551-1.207L9.264 2.3a1.35 1.35 0 0 0-1.473-.2 1.542 1.542 0 0 0-.872 1.427v1.221a6.922 6.922 0 0 0-6 7.134v1.329A1.225 1.225 0 0 0 2.143 14.5a1.187 1.187 0 0 0 1.08-.731 4.72 4.72 0 0 1 3.7-2.867v1.085a1.546 1.546 0 0 0 .872 1.428 1.355 1.355 0 0 0 1.472-.2l5.108-4.251a1.56 1.56 0 0 0 .547-1.205Z" />
      <path d="m19.428 6.205-5.517-4.949a1 1 0 1 0-1.336 1.488l5.517 5.014-5.611 5.088a1 1 0 1 0 1.344 1.482l5.611-5.088a2.05 2.05 0 0 0-.008-3.035Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(ShareAll);
export default ForwardRef;
