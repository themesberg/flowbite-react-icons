import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgThumbtack = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M8 5v4.997a.3.3 0 0 1-.068.113c-.08.098-.213.207-.378.301-.947.543-1.713 1.54-2.191 2.488A6.2 6.2 0 0 0 4.82 14.4c-.1.48-.138 1.031.018 1.539C5.12 16.846 6.02 17 6.414 17H11v3a1 1 0 1 0 2 0v-3h4.586c.395 0 1.295-.154 1.575-1.061.156-.508.118-1.059.017-1.539a6.2 6.2 0 0 0-.541-1.5c-.479-.95-1.244-1.946-2.191-2.489a1.4 1.4 0 0 1-.378-.301.3.3 0 0 1-.068-.113V5h1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2z" />
  </BaseIcon>
));
export default SvgThumbtack;
