import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCaretDown = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.1 8H17a1 1 0 0 1 .8 1.6l-5 6a1 1 0 0 1-1.5 0l-4.9-6A1 1 0 0 1 7.1 8"
    />
  </BaseIcon>
));
export default SvgCaretDown;
