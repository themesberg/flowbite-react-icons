import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBug = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5c1 0 2.1.4 3 1h0V8a3 3 0 0 0-6 0v2h0a5 5 0 0 1 3-1m-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2 0h-2M7 18H6a1 1 0 0 0-1 1v2m12-3h1a1 1 0 0 1 1 1v2m-3-10h1a1 1 0 0 0 1-1V8M8 11H7a1 1 0 0 1-1-1V8"
      />
    </BaseIcon>
  ),
);
export default SvgBug;
