import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDrawSquare = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v2c0 .6.4 1 1 1m0 12h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v2c0 .6.4 1 1 1m12 0h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2c0 .6.4 1 1 1m0-12h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2c0 .6.4 1 1 1"
    />
  </BaseIcon>
));
export default SvgDrawSquare;
