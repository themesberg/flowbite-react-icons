import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgIcecreamAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6a3 3 0 1 1 6 0M9 6c0 1.043.533 1.963 1.341 2.5M9 6a3 3 0 0 0 0 6m6.39 0a3 3 0 1 0-1.66-5.5M8 12h8l-4 9z"
    />
  </BaseIcon>
));
export default SvgIcecreamAlt;
