import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSplitCells = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 18v2h6V4H4v2m16 12v2h-6V4h6v2M6.495 14.495 4 12m0 0 2.495-2.495M4 12h5.948m7.498 2.554L20 12m0 0-2.554-2.554M20 12h-5.832"
    />
  </BaseIcon>
));
export default SvgSplitCells;
