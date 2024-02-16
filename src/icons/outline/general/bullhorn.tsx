import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBullhorn = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 9H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h6m0-6v6m0-6 5.4-3.9A1 1 0 0 1 18 6v12.2a1 1 0 0 1-1.6.8L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6z"
    />
  </BaseIcon>
));
export default SvgBullhorn;
