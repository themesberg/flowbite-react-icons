import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgLaptopCode = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.357 16V5.786c0-.434.348-.786.778-.786h12.444c.43 0 .778.352.778.786V16m-14 0h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1m-14 0h14m-10-8 2.625 2.5L9.357 13m4 0h2"
    />
  </BaseIcon>
));
export default SvgLaptopCode;
