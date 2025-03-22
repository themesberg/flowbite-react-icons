import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMugSaucer = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 8h2a2 2 0 1 1 0 4h-2.5M5 19h11M5 6l.64 6.398A4 4 0 0 0 9.62 16h.76a4 4 0 0 0 3.98-3.602L15 6z"
    />
  </BaseIcon>
));
export default SvgMugSaucer;
