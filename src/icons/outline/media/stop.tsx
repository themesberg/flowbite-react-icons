import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgStop = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <rect
        width={12}
        height={12}
        x={6}
        y={6}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={1}
      />
    </BaseIcon>
  ),
);
export default SvgStop;
