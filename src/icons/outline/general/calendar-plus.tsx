import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCalendarPlus = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M4 9H3v2h1zm16 2h1V9h-1zm-10 3a1 1 0 1 0 0 2zm4 2a1 1 0 1 0 0-2zm-3 1a1 1 0 1 0 2 0zm2-4a1 1 0 1 0-2 0zm-2-6a1 1 0 1 0 2 0zm2-3a1 1 0 1 0-2 0zM6 7a1 1 0 0 0 2 0zm2-3a1 1 0 1 0-2 0zm8 3a1 1 0 1 0 2 0zm2-3a1 1 0 1 0-2 0zM5 7h14V5H5zm14 0v12h2V7zm0 12H5v2h14zM5 19V7H3v12zm0 0H3c0 1.2.9 2 2 2zm14 0v2a2 2 0 0 0 2-2zm0-12h2a2 2 0 0 0-2-2zM5 5a2 2 0 0 0-2 2h2zm-1 6h16V9H4zm6 5h4v-2h-4zm3 1v-4h-2v4zm0-10V4h-2v3zM8 7V4H6v3zm10 0V4h-2v3z"
    />
  </BaseIcon>
));
export default SvgCalendarPlus;
