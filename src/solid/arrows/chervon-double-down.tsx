import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgChervonDoubleDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 10 12"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M5 12a.997.997 0 0 1-.705-.293L.305 7.711A.999.999 0 1 1 1.715 6.3L5 9.589l3.285-3.29a.997.997 0 0 1 1.69.71 1 1 0 0 1-.28.702l-3.99 3.996A.997.997 0 0 1 5 12" />
      <path d="M5 6.006a.997.997 0 0 1-.705-.293L.305 1.718A.999.999 0 1 1 1.715.305L5 3.595 8.285.305a.997.997 0 1 1 1.41 1.413l-3.99 3.995A.997.997 0 0 1 5 6.006" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgChervonDoubleDown);
export default ForwardRef;
