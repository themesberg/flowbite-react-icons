import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgGraduationCap = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.786 9.5 9 4.5 9-4.5-9-4.5zm0 0V17m3-6v6.222c0 .348 2 1.778 6 1.778s6-1.374 6-1.778V11"
    />
  </BaseIcon>
));
export default SvgGraduationCap;
