import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Stackoverflow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 21"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14 19v-5h2v6.988H0V14h1.98v5z" />
      <path d="m3.84 13.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787zm3.372-5.481L7.235 5.08l6.859 5.704 1.132-1.362-6.859-5.704ZM12.57 16H3.655v2h8.915v-2ZM9.861 2.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(Stackoverflow);
export default ForwardRef;
