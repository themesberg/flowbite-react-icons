import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMartiniGlassEmpty = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M5 3a1 1 0 0 0-.753 1.659L11 12.375V19H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-6.624l6.753-7.717A1 1 0 0 0 19 3z"
    />
  </BaseIcon>
));
export default SvgMartiniGlassEmpty;
