import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFlag = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 14v7M5 5v9.5c5.6-5.5 8.4 2.7 14 0V4.8c-5.6 2.7-8.4-5.5-14 0Z"
      />
    </BaseIcon>
  ),
);
export default SvgFlag;
