import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolExclamation = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.071 20v-9l-4 1.125V20zm0 0h8m-8 0V6.667m8 13.333v-9l1.5.422M16.071 20h1m-1 0V6.667m2 1.333-6-4-6 4m5 1h2m-2 3h2m7 8h.01m-.01-3v-4"
    />
  </BaseIcon>
));
export default SvgSchoolExclamation;
