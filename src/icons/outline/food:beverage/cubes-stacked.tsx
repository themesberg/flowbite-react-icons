import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCubesStacked = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 10.857 4 2.286m-4-2.286-4 2.286m4-2.286V6.286m4 6.857v4.571m0-4.571-4 2.286m4-2.286 4-2.286m-4 2.286V8.57m0 4.572 4 2.286m-4 2.285L8 20m4-2.286L16 20m-8 0-4-2.286v-4.571M8 20v-4.571m-4-2.286 4 2.285m8-9.142L12 4 8 6.286m8 0v4.571m0-4.571L12 8.57m4 2.286 4 2.286M8 6.286l4 2.285m8 4.572v4.571L16 20m4-6.857-4 2.286M16 20v-4.571"
    />
  </BaseIcon>
));
export default SvgCubesStacked;
