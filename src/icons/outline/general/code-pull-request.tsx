import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCodePullRequest = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"
    />
  </BaseIcon>
));
export default SvgCodePullRequest;
