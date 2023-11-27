import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgForward = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 16"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.248 14.778C.22 11.717 2.275 4.573 9.466 4.573v-2.04a.931.931 0 0 1 .135-.528c.097-.16.24-.29.413-.376a1.073 1.073 0 0 1 1.096.086l5.479 4.082c.128.099.232.223.303.364a1.004 1.004 0 0 1 0 .905 1.06 1.06 0 0 1-.303.364l-5.48 4.082a1.073 1.073 0 0 1-1.096.087 1.003 1.003 0 0 1-.412-.376.931.931 0 0 1-.135-.527V8.655c-7.191 1.02-8.218 6.123-8.218 6.123Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgForward);
export default ForwardRef;
