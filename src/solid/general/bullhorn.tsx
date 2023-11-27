import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgBullhorn = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 19"
    ref={ref}
    {...props}
  >
    <path
      fill="#2F2F38"
      d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943M7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2zM4 17v-5h1v5zM16 5.183v5.634a2.985 2.985 0 0 0 0-5.634"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBullhorn);
export default ForwardRef;
