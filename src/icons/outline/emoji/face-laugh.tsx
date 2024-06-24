import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFaceLaugh = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0M6.6 13a5.5 5.5 0 0 0 10.81 0z"
    />
  </BaseIcon>
));
export default SvgFaceLaugh;
