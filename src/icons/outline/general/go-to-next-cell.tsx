import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGoToNextCell = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v3a1 1 0 0 0 1 1h9.5M3 15v-4m0 4h9m-9-4V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5zm5 0v8m4-8v8m7.1-1.1L21 16m0 0-1.9-1.9M21 16h-5"
    />
  </BaseIcon>
));
export default SvgGoToNextCell;
