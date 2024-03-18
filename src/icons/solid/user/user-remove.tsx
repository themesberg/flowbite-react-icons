import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgUserRemove = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M5 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgUserRemove;
