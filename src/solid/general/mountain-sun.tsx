import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgMountainSun = (
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
      fill="currentColor"
      d="m19.847 16.343-4.4-7a1 1 0 0 0-1.6-.131l-2.164 2.448-3.812-6.775a1.028 1.028 0 0 0-.887-.51 1 1 0 0 0-.871.537l-6 11.5A1 1 0 0 0 1 17.875h18a1 1 0 0 0 .847-1.532M12.5 6.375a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMountainSun);
export default ForwardRef;
