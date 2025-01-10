import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMusic = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0V6.333L18 4v11.667M8 10.333 18 8m0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </BaseIcon>
  ),
);
export default SvgMusic;
