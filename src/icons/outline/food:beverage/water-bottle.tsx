import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWaterBottle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 6v2s-3 1-3 3.25 1 2.25 1 3-1 1.125-1 2.25V19c0 .938 1 2 2.5 2s2-.937 2-.937.5.937 2 .937 2.5-1.062 2.5-2v-2.5c0-1.125-1-1.5-1-2.25s1-.75 1-3S14 8 14 8V6m-3 0h-1V3h5v3h-1m-3 0h3m-5.956 6h8.912M8 17h9"
    />
  </BaseIcon>
));
export default SvgWaterBottle;
