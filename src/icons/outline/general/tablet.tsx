import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTablet = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 18h2M5.9 3H18c.5 0 .9.4.9 1v16c0 .6-.4 1-.9 1H6c-.5 0-.9-.4-.9-1V4c0-.6.4-1 .9-1Z"
      />
    </BaseIcon>
  ),
);
export default SvgTablet;
