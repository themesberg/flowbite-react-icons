import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBattery = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M7 13v-2h7v2z" />
    <path
      fillRule="evenodd"
      d="M2 8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path d="M22 14v-4a1 1 0 0 0-1-1h-1v6h1a1 1 0 0 0 1-1" />
  </BaseIcon>
));
export default SvgBattery;
