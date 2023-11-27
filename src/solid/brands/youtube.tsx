import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const Youtube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 20 14"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.037a30.148 30.148 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.271 4.271 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.591v-5.62l5.4 2.82-5.4 2.8Z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Youtube);
export default ForwardRef;
