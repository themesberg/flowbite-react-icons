import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgFileInvoice = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 11H5v1h2zm4 3H9v1h2zm-4 0H5v1h2zM5 5V.13a2.98 2.98 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5z"
    />
    <path
      fill="currentColor"
      d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2M13 16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-1-8H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2m0-3H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2"
    />
    <path fill="currentColor" d="M11 11H9v1h2z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileInvoice);
export default ForwardRef;
