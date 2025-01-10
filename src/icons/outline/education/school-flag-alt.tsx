import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolFlagAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.429 11 5-6 5 6m-10 0h-3v8h16v-8h-3m-10 0h-4l3-4h4.337zm10 0V7.5m-3 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m3-8v3h4V5z"
    />
  </BaseIcon>
));
export default SvgSchoolFlagAlt;
