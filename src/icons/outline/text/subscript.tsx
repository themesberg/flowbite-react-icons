import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSubscript = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 20h-4v-.5c1.099-1.033 3.75-2.5 3.75-3.5v-1a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1M4 4l9.122 11.393m0-11.393L4 15.393"
    />
  </BaseIcon>
));
export default SvgSubscript;
