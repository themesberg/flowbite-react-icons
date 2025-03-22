import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCandyCane = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="m11 9.163-5-.802V10.5a2.5 2.5 0 0 0 5 0zM6.14 6.358l4.86.78v-5.05c-1.145.2-2.228.73-3.087 1.474-.834.723-1.496 1.686-1.773 2.796M13 2.088V7h4.973c-.147-1.382-.896-2.579-1.886-3.438A6.46 6.46 0 0 0 13 2.088M18 9h-5v2h5zm0 4h-5v2h5zm0 4h-5v2.5a2.5 2.5 0 0 0 5 0z"
    />
  </BaseIcon>
));
export default SvgCandyCane;
