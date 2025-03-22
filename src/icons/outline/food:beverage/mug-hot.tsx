import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMugHot = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 13h2a2 2 0 1 1 0 4h-2.5M10 3c0 2.4-3 1.6-3 4m8-4c0 2.4-3 1.6-3 4m-7 4 .64 6.398A4 4 0 0 0 9.62 21h.76a4 4 0 0 0 3.98-3.602L15 11z"
      />
    </BaseIcon>
  ),
);
export default SvgMugHot;
