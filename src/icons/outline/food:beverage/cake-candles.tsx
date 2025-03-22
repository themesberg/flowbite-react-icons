import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCakeCandles = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 17.43V15h4.333M5 17.43V21h14v-6h-4.333M5 17.43c.387.337.923.57 1.667.57 2.666 0 2.666-3 2.666-3m5.334 0H9.333m5.334 0s0 3-2.667 3-2.667-3-2.667-3m5.334 0s0 3 2.666 3c.744 0 1.28-.233 1.667-.57M12 8c.11 0 2-1.12 2-2.5S12.092 3 12 3s-2 1.12-2 2.5S11.895 8 12 8m0 0v3m-6 0v4h12v-4z"
    />
  </BaseIcon>
));
export default SvgCakeCandles;
