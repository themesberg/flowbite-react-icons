import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgHotdog = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 8 1-1m-1 5.5 1-1m-1 5.5 1-1M9 20V4h-.5A3.5 3.5 0 0 0 5 7.5v9A3.5 3.5 0 0 0 8.5 20zm6 0V4h.5A3.5 3.5 0 0 1 19 7.5v9a3.5 3.5 0 0 1-3.5 3.5zm0-2V6a3 3 0 1 0-6 0v12a3 3 0 1 0 6 0"
      />
    </BaseIcon>
  ),
);
export default SvgHotdog;
