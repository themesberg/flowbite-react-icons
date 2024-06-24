import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgListMusic = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 15.5V5s3 1 3 4m-7-3H4m9 4H4m4 4H4m13 2.4c0 1.326-1.343 2.4-3 2.4s-3-1.075-3-2.4 1.343-2.4 3-2.4 3 1.075 3 2.4"
    />
  </BaseIcon>
));
export default SvgListMusic;
