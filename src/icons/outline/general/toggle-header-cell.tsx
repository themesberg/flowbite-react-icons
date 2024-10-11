import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgToggleHeaderCell = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15v3a1 1 0 0 0 1 1h10M3 15v-4m0 4h9m-9-4V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3M3 11h11m-2-.208V19m3-4h1.99M21 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </BaseIcon>
));
export default SvgToggleHeaderCell;
