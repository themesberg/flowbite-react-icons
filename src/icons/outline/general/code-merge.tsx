import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCodeMerge = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 0h-1a5 5 0 0 1-5-5v-.5"
    />
  </BaseIcon>
));
export default SvgCodeMerge;
