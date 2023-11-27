import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBlenderPhone = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 19"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.287 5H15m3.852 3H15m3.384 3H15m-9.47-.764h-.972A14.756 14.756 0 0 1 4.445 8c-.019-.747.019-1.495.113-2.236h.972a.95.95 0 0 0 .946-.856l.188-1.877a.951.951 0 0 0-.946-1.046H3.791a1.127 1.127 0 0 0-1.067.749A16.11 16.11 0 0 0 2 8a16.737 16.737 0 0 0 .743 5.242c.154.463 1.255.773 1.743.773h1.232a.95.95 0 0 0 .946-1.046l-.188-1.877a.95.95 0 0 0-.946-.856ZM19.063 2H10v12h8.273l1.716-10.847A.981.981 0 0 0 19.063 2M20 18H9v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBlenderPhone);
export default ForwardRef;
