import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolXmark = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.071 20v-9l-4 1.125V20zm0 0V6.667m0 13.333h4m4-9V6.667m0 4.333 4 1.125V13m-4-2v2m2-5-6-4-6 4m5 1h2m-2 3h2m3.015 4.409 1.768 1.768m0 0 1.768 1.767m-1.768-1.767-1.768 1.767m1.768-1.767 1.768-1.768"
    />
  </BaseIcon>
));
export default SvgSchoolXmark;
