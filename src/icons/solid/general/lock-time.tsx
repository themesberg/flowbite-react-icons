import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLockTime = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.5 7.5 0 0 0-1.943.685A1 1 0 0 1 12 8.5V7a2 2 0 0 0-2-2"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707z"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgLockTime;
