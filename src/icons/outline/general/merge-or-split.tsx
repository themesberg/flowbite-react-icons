import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgMergeOrSplit = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.505 14.495 21 12m0 0-2.495-2.495M21 12h-5.948m-9.498 2.554L3 12m0 0 2.554-2.554M3 12h5.832M9 19V5h6v14z"
    />
  </BaseIcon>
));
export default SvgMergeOrSplit;
