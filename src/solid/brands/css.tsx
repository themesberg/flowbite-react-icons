import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Css = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M.906 0 2.5 17.781l7.5 2.16 7.544-2.159L19.091 0H.906Zm13.437 14.679-4.337 1.2h-.009l-4.341-1.2-.3-3.158h2.13l.151 1.521 2.36.637 2.363-.638.248-3.041H5.264l-.19-2h7.718l.177-2H4.87l-.177-2h10.614l-.964 10.679Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Css);
export default ForwardRef;
