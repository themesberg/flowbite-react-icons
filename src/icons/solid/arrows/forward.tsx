import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgForward = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M5.027 10.9a8.73 8.73 0 0 1 6.422-3.62v-1.2A2.06 2.06 0 0 1 12.61 4.2a1.99 1.99 0 0 1 2.104.23l5.491 4.308a2.11 2.11 0 0 1 .588 2.566 2.1 2.1 0 0 1-.588.734l-5.489 4.308a1.98 1.98 0 0 1-2.104.228 2.07 2.07 0 0 1-1.16-1.876v-.942c-5.33 1.284-6.212 5.251-6.25 5.441a1 1 0 0 1-.923.806h-.06a1 1 0 0 1-.955-.7A10.22 10.22 0 0 1 5.027 10.9" />
  </BaseIcon>
));
export default SvgForward;
