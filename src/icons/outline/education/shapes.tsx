import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShapes = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M4.071 14v6h6v-6zm4.5-4h7l-3.5-6zm8 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
    </BaseIcon>
  ),
);
export default SvgShapes;
