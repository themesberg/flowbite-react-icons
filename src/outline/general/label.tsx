import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Label = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.705 13H1.969a.985.985 0 0 1-.97-1V2a.985.985 0 0 1 .97-1h10.815a2 2 0 0 1 1.388.56L18 5.251a2.02 2.02 0 0 1 .093 2.785l-3.911 4.308a2 2 0 0 1-1.477.656Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Label);
export default ForwardRef;
