import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLaravel = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="m17 13 3.464-2V7L17 5l-3.464 2v4M17 13l-3.464-2M17 13v4l-7 4m7-8V9m0 4-7 4m3.536-6L10.5 12.735M10 21l-3.464-2.132M10 21v-4m-3.464 2v-.132m0 0V15l3.964-2.265m-3.964 6.133L3.5 17V5m0 0L7 3l3.5 2m-7 0 3 2m4-2v7.735M10.5 5l-4 2M17 9l3.5-2M17 9l-3.5-2M10 17l-3.5-2m0 .5V7"
    />
  </BaseIcon>
));
export default SvgLaravel;
