import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const MapPinAlt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M8 0a7.992 7.992 0 0 0-6.583 12.535.999.999 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.926.926 0 0 0 .122-.192A8 8 0 0 0 8 0m0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </svg>
);

const ForwardRef = forwardRef(MapPinAlt);
export default ForwardRef;
