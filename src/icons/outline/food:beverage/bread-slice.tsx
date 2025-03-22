import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgBreadSlice = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 19v-9c-1.5 0-2-1.5-2-2.5s.5-2 2-2.5c2.364-.643 4.2-.976 6-.989 1.8.013 3.636.346 6 .989 1.5.5 2 1.5 2 2.5s-.5 2.5-2 2.5v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"
    />
  </BaseIcon>
));
export default SvgBreadSlice;
