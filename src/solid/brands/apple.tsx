import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgApple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.537 10.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532C1.323 14.984.01 10.451 1.772 7.391a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869.789 0 2.271-1.075 3.828-.917A4.67 4.67 0 0 1 16.7 6.82a4.524 4.524 0 0 0-2.161 3.805M12.02 3.193A4.4 4.4 0 0 0 13.06 0a4.482 4.482 0 0 0-2.946 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgApple);
export default ForwardRef;
