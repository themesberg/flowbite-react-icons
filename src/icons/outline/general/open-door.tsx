import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgOpenDoor = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18V6h-5v12zm0 0h2M4 18h2.5m3.5-5.5V12M6 6l7-2v16l-7-2z"
    />
  </BaseIcon>
));
export default SvgOpenDoor;
