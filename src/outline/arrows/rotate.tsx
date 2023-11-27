import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgRotate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 18 20"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 1.81v4.74h-5M2 18.87v-4.738h5m10-3.791a7.33 7.33 0 0 1-1.658 4.623c-1.075 1.326-2.583 2.278-4.288 2.707a8.412 8.412 0 0 1-5.141-.333c-1.628-.645-2.985-1.783-3.86-3.235M1 10.34c0-1.672.582-3.298 1.658-4.624C3.733 4.391 5.24 3.44 6.946 3.01a8.413 8.413 0 0 1 5.141.333c1.628.645 2.985 1.782 3.86 3.234"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRotate);
export default ForwardRef;
