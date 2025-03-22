import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgIcecream = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M6.083 7A6.002 6.002 0 0 1 18 8h-2.5a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 1-1 0V10a3 3 0 0 0-3-3z"
    />
    <path
      fill="currentColor"
      d="M6 9v5a2 2 0 0 0 2 2h3v5a1 1 0 1 0 2 0v-5h3a2 2 0 0 0 2-2v-4h-2.5a.5.5 0 0 0-.5.5 2.5 2.5 0 0 1-5 0V10a1 1 0 0 0-1-1z"
    />
  </BaseIcon>
));
export default SvgIcecream;
