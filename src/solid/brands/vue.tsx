import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Vue = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.5 0 10 4.156 7.857 0H0l10 18L20 0zM2.486 1.5h2.4L10 10.8l5.107-9.3h2.4L10 15.021 2.486 1.5"
    />
  </svg>
);

const ForwardRef = forwardRef(Vue);
export default ForwardRef;
