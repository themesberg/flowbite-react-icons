import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgWhiskeyGlass = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 14h10M6 7l.847 10.166A2 2 0 0 0 8.84 19h6.32a2 2 0 0 0 1.993-1.834L18 7z"
    />
  </BaseIcon>
));
export default SvgWhiskeyGlass;
