import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShapes = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="currentColor" ref={ref} {...props}>
      <path d="M12.864 3.496a1 1 0 0 0-1.728 0l-3.5 6A1 1 0 0 0 8.5 11h7a1 1 0 0 0 .864-1.504zM4 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm12.5-1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" />
    </BaseIcon>
  ),
);
export default SvgShapes;
