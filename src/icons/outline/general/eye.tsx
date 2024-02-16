import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgEye = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6 4-6 9-6 9 4.8 9 6Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </BaseIcon>
  ),
);
export default SvgEye;
