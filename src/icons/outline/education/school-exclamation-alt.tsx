import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolExclamationAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.5 19h-13v-8h3m0 0 5-6 5 6m-10 0h-4l3-4h4.337zm13 8h.01m-.01-3v-3m-6.337-6H18.5l2 2.5m-6 3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </BaseIcon>
));
export default SvgSchoolExclamationAlt;
