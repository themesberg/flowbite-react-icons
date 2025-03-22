import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDropletBottleAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6v2.5C10 9 7 9.75 7 12v7c0 .938 0 2 2.143 2h5.714C17 21 17 19.938 17 19v-7c0-2.25-3-3-3-3.5V6m-4 0H9V3h6v3h-1m-4 0h4m0 10a2 2 0 1 1-4 0c0-1.5 1.787-4 2-4s2 2.5 2 4"
    />
  </BaseIcon>
));
export default SvgDropletBottleAlt;
