import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolCheck = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.143 20v-9l-4 1.125V20zm0 0V6.667m0 13.333h3m5-9V6.667m0 4.333 4 1.125V13m-4-2v3m2-6-6-4-6 4m5 1h2m-2 3h2m1 6 2 2 4-4"
    />
  </BaseIcon>
));
export default SvgSchoolCheck;
