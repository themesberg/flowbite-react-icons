import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFlask = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.05 3v5c-2.719.934-5 3.24-5 6.2 0 3.756 3.134 6.8 7 6.8s7-3.044 7-6.8c0-2.96-2.281-5.266-5-6.2V3m-4 0h4m-4 0h-2m6 0h2M5.098 15h13.904"
      />
    </BaseIcon>
  ),
);
export default SvgFlask;
