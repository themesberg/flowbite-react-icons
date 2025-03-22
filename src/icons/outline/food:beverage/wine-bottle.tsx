import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWineBottle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 8h4m-3-5a1 1 0 0 0-1 1v6c-2 1-2 2.5-2 4.5V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5.5c0-2 0-3.5-2-4.5V4a1 1 0 0 0-1-1zm5 10h-4v5h4z"
    />
  </BaseIcon>
));
export default SvgWineBottle;
