import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSuperscript = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 10h-4v-.5C17.099 8.467 19.75 7 19.75 6V5a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1M4 7.303l9.122 11.394m0-11.394L4 18.697"
    />
  </BaseIcon>
));
export default SvgSuperscript;
