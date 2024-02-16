import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMapPin = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
      />
    </BaseIcon>
  ),
);
export default SvgMapPin;
