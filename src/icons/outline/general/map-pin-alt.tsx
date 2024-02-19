import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMapPinAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.8 14a7 7 0 1 0-11.5 0h0l.2.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
    />
  </BaseIcon>
));
export default SvgMapPinAlt;
