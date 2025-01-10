import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMoonPlus = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M17 4a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0V9h-2a1 1 0 1 1 0-2h2V5a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path d="M12.322 4.687a1 1 0 0 0-.877-1.676 8.96 8.96 0 0 0-4.129 1.763 8.57 8.57 0 0 0-2.694 3.527 8.3 8.3 0 0 0-.532 4.371 8.4 8.4 0 0 0 1.779 4.044A8.8 8.8 0 0 0 9.47 19.36a9.1 9.1 0 0 0 4.468.57 9 9 0 0 0 4.179-1.648 8.6 8.6 0 0 0 2.797-3.45 1 1 0 0 0-1.373-1.294 6.1 6.1 0 0 1-2.812.679h-.002a6.1 6.1 0 0 1-3.26-.931 5.77 5.77 0 0 1-2.185-2.478 5.5 5.5 0 0 1-.424-3.205 5.6 5.6 0 0 1 1.464-2.917" />
  </BaseIcon>
));
export default SvgMoonPlus;
