import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGlassWater = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.315 7c1.419 0 1.419 1.5 2.837 1.5S10.571 7 11.99 7s1.419 1.5 2.837 1.5S17.663 7 17.663 7M6 3l1.076 16.133A2 2 0 0 0 9.07 21h5.858a2 2 0 0 0 1.995-1.867L18 3z"
    />
  </BaseIcon>
));
export default SvgGlassWater;
