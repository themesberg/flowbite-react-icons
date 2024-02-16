import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCaretRight = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16.9V7a1 1 0 0 1 1.6-.8l6 5a1 1 0 0 1 0 1.5l-6 4.9a1 1 0 0 1-1.6-.8Z"
    />
  </BaseIcon>
));
export default SvgCaretRight;
