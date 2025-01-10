import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolCheckAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.286 11 5-6 5 6m-10 0h-3v8h8m-5-8h-4l3-4h4.337zm10 0h3v1m-3-1h4l-3-4h-4.338zm-2 6 2 2 4-4m-7-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </BaseIcon>
));
export default SvgSchoolCheckAlt;
