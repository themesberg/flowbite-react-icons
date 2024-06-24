import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgArrowUpRightDownLeft = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"
    />
  </BaseIcon>
));
export default SvgArrowUpRightDownLeft;
