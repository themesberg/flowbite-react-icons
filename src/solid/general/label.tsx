import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgLabel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.7 4.531 14.866.84A2.985 2.985 0 0 0 12.784 0H1.969A1.987 1.987 0 0 0 0 2v10a1.987 1.987 0 0 0 1.969 2h10.736a3.005 3.005 0 0 0 2.221-.983l3.912-4.309a3.023 3.023 0 0 0-.138-4.177Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLabel);
export default ForwardRef;