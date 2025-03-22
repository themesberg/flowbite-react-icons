import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgShrimp = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.524 12.47H8a3 3 0 0 1-3-3V8h5m3.524 4.47a2.265 2.265 0 1 1 0 4.53H11a2 2 0 0 0-2 2v1h6.5m-1.976-7.53L15.5 7.764M10 8c1.846-1.251 3.077-1.408 5.5-.236M10 8v4.47L8 14m7.5-6.236c3.18-.245 5.556 2.362 4.754 5.45-.105.406-.224.84-.359 1.31.017.812-.006 1.488-.063 2.088C19.632 18.702 17.6 20 15.5 20m0 0-1.204-3.135M15.668 14h4.375M10 4H6a2 2 0 1 0 0 4"
      />
    </BaseIcon>
  ),
);
export default SvgShrimp;
