import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMobilePhone = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 15h12M6 6h12M7 21h10c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H7a1 1 0 0 0-1 1v16c0 .6.4 1 1 1"
    />
  </BaseIcon>
));
export default SvgMobilePhone;
