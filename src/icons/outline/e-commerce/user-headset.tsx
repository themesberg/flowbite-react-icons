import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgUserHeadset = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 6.8a3 3 0 0 0-4.2.1M13 20h1a4 4 0 0 0 4-4V9A6 6 0 1 0 6 9v7m7 4v-1c0-.6-.4-1-1-1h-1a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1m-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1z"
    />
  </BaseIcon>
));
export default SvgUserHeadset;
