import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgVolumeDown = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M15 6.037c0-1.724-1.978-2.665-3.28-1.562L7.638 7.933H6c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562z" />
    <path
      fillRule="evenodd"
      d="M16.786 7.658a.99.99 0 0 1 1.414-.014A6.14 6.14 0 0 1 20 12c0 1.662-.655 3.17-1.715 4.27a.99.99 0 0 1-1.414.014 1.03 1.03 0 0 1-.014-1.437A4.09 4.09 0 0 0 18 12a4.09 4.09 0 0 0-1.2-2.904 1.03 1.03 0 0 1-.014-1.438"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgVolumeDown;
