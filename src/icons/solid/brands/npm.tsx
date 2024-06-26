import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgNpm = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.87H4v16h8v-13h5v13h3v-16z"
      />
    </BaseIcon>
  ),
);
export default SvgNpm;
