import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgHorizontalLines = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" d="M5 12h14" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M6 9.5h12m-12-2h12m-12-2h12m-12 13h12m-12-2h12m-12-2h12"
    />
  </BaseIcon>
));
export default SvgHorizontalLines;
