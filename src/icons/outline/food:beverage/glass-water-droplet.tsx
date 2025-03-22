import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGlassWaterDroplet = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17h10M6 3l1.076 16.133A2 2 0 0 0 9.07 21h5.858a2 2 0 0 0 1.995-1.867L18 3zm8 8a2 2 0 1 1-4 0c0-1.105 1.791-4 2-4s2 2.895 2 4"
    />
  </BaseIcon>
));
export default SvgGlassWaterDroplet;
