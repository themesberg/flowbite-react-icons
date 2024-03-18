import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSwatchbook = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M20 14h-2.722L11 20.278a5.5 5.5 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1M6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418" />
  </BaseIcon>
));
export default SvgSwatchbook;
