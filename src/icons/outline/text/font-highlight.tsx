import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFontHighlight = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M9 20H5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H18m-6-1 1.42 1.893a.1.1 0 0 0 .16 0L15 19m-7-6 3.907-9.768a.1.1 0 0 1 .186 0L16 13m-8 0H7m1 0h1.5m6.5 0h-1.5m1.5 0h1m-7-3h4"
    />
  </BaseIcon>
));
export default SvgFontHighlight;
