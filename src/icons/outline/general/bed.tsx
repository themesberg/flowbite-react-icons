import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBed = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v4zm-2-7V8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2z"
      />
    </BaseIcon>
  ),
);
export default SvgBed;
