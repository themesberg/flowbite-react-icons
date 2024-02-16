import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLabel = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.2 6H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11.2c.3 0 .6-.1.7-.3l4.5-5c.3-.4.3-1 0-1.4l-4.5-5a1 1 0 0 0-.7-.3"
      />
    </BaseIcon>
  ),
);
export default SvgLabel;
