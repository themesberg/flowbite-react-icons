import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolLockAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.357 11 5-6 3.333 4m-8.333 2h-3v8h7m-4-8h-4l3-4h4.337zm8.331-2L14.02 7h4.337l1.5 2m-8.324 5.898a2 2 0 1 1 1.502-3.708M16.357 15v-2.5a1.5 1.5 0 0 1 3 0V15m-4 0h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1"
    />
  </BaseIcon>
));
export default SvgSchoolLockAlt;
