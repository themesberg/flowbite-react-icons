import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCodeBranch = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"
    />
  </BaseIcon>
));
export default SvgCodeBranch;
