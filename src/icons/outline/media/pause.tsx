import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPause = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 6H8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1m7 0h-1a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"
      />
    </BaseIcon>
  ),
);
export default SvgPause;
