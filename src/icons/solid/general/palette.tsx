import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPalette = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M8.649 2.577A10.004 10.004 0 0 1 20.344 6.49a10 10 0 0 1 1.2 8.486l-.004.01-.005.015a2.96 2.96 0 0 1-2.836 2.001h-2.69a1.04 1.04 0 0 0-.95.68c-.047.13-.068.27-.06.409v.916A3.01 3.01 0 0 1 11.96 22a9.6 9.6 0 0 1-4.195-1l.009.005-.018-.009.01.004a10.1 10.1 0 0 1-5.716-7.996l-.001-.012a9.99 9.99 0 0 1 6.6-10.415m3.35 3.429a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM8.53 7.518a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm6.968 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM6.99 11.004a1 1 0 1 0 0 2H7a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgPalette;
