import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCaretUp = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.9 16H7a1 1 0 0 1-.8-1.6l5-6a1 1 0 0 1 1.5 0l4.9 6a1 1 0 0 1-.8 1.6Z"
    />
  </BaseIcon>
));
export default SvgCaretUp;
