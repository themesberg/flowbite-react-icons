import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTruckClock = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7h6l2 4m-8-4v8H9m4-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m14 0h2v-4m0 0h-5M8 8.667V10l1.5 1.5m10 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </BaseIcon>
));
export default SvgTruckClock;
