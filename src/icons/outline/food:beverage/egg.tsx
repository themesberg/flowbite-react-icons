import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEgg = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 13c0-.888.402-2.383 1-3.272M18.05 14a6 6 0 1 1-12 0c0-3.314 2.686-10 6-10s6 6.686 6 10"
      />
    </BaseIcon>
  ),
);
export default SvgEgg;
