import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolLock = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.214 20v-9l-4 1.125V20zm0 0V6.667m0 13.333h2m6-11V6.667m2 1.333-6-4-6 4m5 1h2m-2 3h1m3 4v-2.5a1.5 1.5 0 0 1 3 0V16m-4 0h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1"
    />
  </BaseIcon>
));
export default SvgSchoolLock;
