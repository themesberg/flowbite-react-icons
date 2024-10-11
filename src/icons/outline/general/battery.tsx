import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBattery = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M2.988 7.971a1 1 0 0 1 1-1h12.937a1 1 0 0 1 1 1v7.959a1 1 0 0 1-1 1H3.988a1 1 0 0 1-1-1zm17.925 4.97v-1.983a1 1 0 0 0-1-1h-.988a1 1 0 0 0-1 1v1.984a1 1 0 0 0 1 1h.988a1 1 0 0 0 1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M5.975 9.959h8.963v3.983H5.975z"
    />
  </BaseIcon>
));
export default SvgBattery;
