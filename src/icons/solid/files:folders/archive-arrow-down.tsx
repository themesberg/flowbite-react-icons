import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgArchiveArrowDown = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgArchiveArrowDown;
