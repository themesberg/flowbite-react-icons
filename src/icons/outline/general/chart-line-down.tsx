import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChartLineDown = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4.5V19c0 .6.4 1 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.2m3.2 0v-3.2"
    />
  </BaseIcon>
));
export default SvgChartLineDown;
