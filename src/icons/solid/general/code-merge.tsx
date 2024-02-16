import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCodeMerge = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      d="M5 6a3 3 0 1 1 4 2.83V9a4 4 0 0 0 4 4h.17a3.001 3.001 0 1 1 0 2H13a5.98 5.98 0 0 1-4-1.528v1.699a3.001 3.001 0 1 1-2 0V8.829A3 3 0 0 1 5 6"
      clipRule="evenodd"
    />
  </BaseIcon>
));
export default SvgCodeMerge;
