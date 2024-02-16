import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgThumbsDown = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 13c-.9 0-1.4.5-2.2 1a22.3 22.3 0 0 0-4 5.1c0 .3-.2.5-.5.7a1.5 1.5 0 0 1-2-.4 1.6 1.6 0 0 1-.4-1.2L9.3 14m7.7-1h3V6.5c0-.8-.7-1.5-1.5-1.5v0c-.8 0-1.5.7-1.5 1.5zm-6.5 1h-5a1 1 0 0 1-.5-.1 1.8 1.8 0 0 1-1-1.4l.1-.9 2.1-6.4C6.5 4.5 6.6 4 8 4c2.3 0 4.8 1 6.7 1.5"
    />
  </BaseIcon>
));
export default SvgThumbsDown;
