import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCommand = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2zm0 8h8m-8 0H6a2 2 0 1 0 2 2zm8 0V8m0 8h2a2 2 0 1 1-2 2zm0-8h2a2 2 0 1 0-2-2z"
    />
  </BaseIcon>
));
export default SvgCommand;
