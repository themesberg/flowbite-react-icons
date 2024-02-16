import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgStarHalf = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="m12.2 20.8 4.3-2.4c.3-.2.5-.5.5-.9V4c0-.4-2 3.4-2.8 4.8a1 1 0 0 1-.8.5l-4.9.4a1 1 0 0 0-.5 1.7l3.5 3c.4.2.5.6.4 1l-1.1 4.3a1 1 0 0 0 1.4 1.1Z"
    />
  </BaseIcon>
));
export default SvgStarHalf;
