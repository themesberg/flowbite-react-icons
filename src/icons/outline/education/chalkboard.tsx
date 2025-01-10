import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgChalkboard = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 14H4m6.5 3L8 20m5.5-3 2.5 3M4.889 17H19.11c.491 0 .889-.416.889-.929V4.93c0-.513-.398-.929-.889-.929H4.89C4.398 4 4 4.416 4 4.929V16.07c0 .513.398.929.889.929M13 14v-3h4v3z"
    />
  </BaseIcon>
));
export default SvgChalkboard;
