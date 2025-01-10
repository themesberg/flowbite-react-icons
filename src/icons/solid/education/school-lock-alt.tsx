import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolLockAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="currentColor" ref={ref} {...props}>
    <path d="M6.651 11.63 12 5.048l3.01 3.704a4.5 4.5 0 0 0-1.496 1.659 3 3 0 1 0-2.51 5.421L11 16v2c0 .729.195 1.412.535 2H4a1 1 0 0 1-1-1v-7h2.875a1 1 0 0 0 .776-.37" />
    <path
      fillRule="evenodd"
      d="M16.102 10.427A2.5 2.5 0 0 0 15 12.5V14q-.087 0-.173.007a2 2 0 0 0-1.82 1.82v.006Q13 15.915 13 16v2a2 2 0 0 0 2 2h5.008A2 2 0 0 0 22 18v-2a2 2 0 0 0-2-2v-1.5q0-.257-.05-.5a2.5 2.5 0 0 0-3.848-1.573M17.5 12a.5.5 0 0 0-.5.5V14h1v-1.5a.5.5 0 0 0-.5-.5"
      clipRule="evenodd"
    />
    <path d="M21.242 10a4.5 4.5 0 0 0-4.244-1.972L15.351 6H18a1 1 0 0 1 .8.4l2.7 3.6zm-8.33 2.588a1 1 0 1 0-1.324 1.323 4 4 0 0 1 1.323-1.323M5.2 6.4 2.5 10h2.899l3.25-4H6a1 1 0 0 0-.8.4" />
  </BaseIcon>
));
export default SvgSchoolLockAlt;
