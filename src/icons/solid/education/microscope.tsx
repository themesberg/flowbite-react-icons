import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMicroscope = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="m17.965 5.492.37.37a1 1 0 1 0 1.414-1.414l-2.155-2.155a1 1 0 1 0-1.414 1.414l.37.37-.74.742-.371-.37a1 1 0 0 0-1.415 0l-4.31 4.31a1 1 0 0 0 0 1.414l.35.35-.771.77a1 1 0 1 0 1.414 1.414l.77-.77.392.392a1 1 0 0 0 1.414 0l2.063-2.063c.415.674.654 1.47.654 2.325C16 15.036 14.042 17 11.648 17a4.3 4.3 0 0 1-2.76-1H11a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h1.268A6.4 6.4 0 0 0 9 18.418V20H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-4v-1.964a6.42 6.42 0 0 0 3-5.445c0-1.406-.45-2.709-1.213-3.767l.807-.806a1 1 0 0 0 0-1.414l-.37-.371z" />
  </BaseIcon>
));
export default SvgMicroscope;
