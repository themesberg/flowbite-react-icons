import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgRestoreWindow = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11.5h13m-13 0V18c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-6.5m-13 0V9c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v2.5M9 5h11c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-1"
    />
  </BaseIcon>
));
export default SvgRestoreWindow;
