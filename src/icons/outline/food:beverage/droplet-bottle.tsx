import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgDropletBottle = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6h6m-5-3v6c-2 1.5-3 3.5-3 5.5V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.5c0-2-1-4-3-5.5V3zm4 13a2 2 0 1 1-4 0c0-1.105 1.885-4 2-4s2 2.895 2 4"
    />
  </BaseIcon>
));
export default SvgDropletBottle;
