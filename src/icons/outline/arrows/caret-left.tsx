import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCaretLeft = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 16.9V7a1 1 0 0 0-1.6-.8l-6 5a1 1 0 0 0 0 1.5l6 4.9a1 1 0 0 0 1.6-.8Z"
    />
  </BaseIcon>
));
export default SvgCaretLeft;
