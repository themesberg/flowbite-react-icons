import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchool = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 20v-9l-4 1.125V20zm0 0h8m-8 0V6.667M16 20v-9l4 1.125V20zm0 0V6.667M18 8l-6-4-6 4m5 1h2m-2 3h2"
      />
    </BaseIcon>
  ),
);
export default SvgSchool;
