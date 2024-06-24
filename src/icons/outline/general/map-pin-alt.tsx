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
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171q.15.19.3.371L12 21l5.13-6.248q.291-.314.54-.659z"
    />
  </BaseIcon>
));
export default SvgMapPinAlt;
