import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const FileCsv = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v4.639M6 1v4a1 1 0 0 1-1 1H1m2.665 9H2.647A1.647 1.647 0 0 1 1 13.353v-1.706A1.647 1.647 0 0 1 2.647 10h1.018M12 10l1.443 4.773L15 10m-6.057-.152L8 9.828a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"
    />
  </svg>
);

const ForwardRef = forwardRef(FileCsv);
export default ForwardRef;
