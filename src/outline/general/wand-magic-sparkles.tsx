import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgWandMagicSparkles = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="m12.555 5.117 2.828 2.828M14 16v4m-2-2h4M3 6v4M1 8h4m11.01-6.339 2.828 2.829L3.99 19.339 1.161 16.51 16.01 1.661"
    />
    <path
      fill="currentColor"
      d="M17 12h-2v2h2zM11 1H9v2h2zM8 3H6v2h2zM5 1H3v2h2zM20 9h-2v2h2zM20 14h-2v2h2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgWandMagicSparkles);
export default ForwardRef;
