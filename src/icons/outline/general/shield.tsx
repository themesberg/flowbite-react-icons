import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShield = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20a16.4 16.4 0 0 1-5.092-5.804A16.7 16.7 0 0 1 5 6.666L12 4l7 2.667a16.7 16.7 0 0 1-1.908 7.529A16.4 16.4 0 0 1 12 20"
      />
    </BaseIcon>
  ),
);
export default SvgShield;
