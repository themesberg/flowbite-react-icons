import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgSchoolXmarkAlt = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.976 15.464 1.767 1.768m0 0L20.511 19m-1.768-1.768L16.976 19m1.767-1.768 1.768-1.768M7.214 11l5-6 5 6m-10 0h-3v8h9.08m-6.08-8h-4l3-4h4.338zm10 0h3v1.557m-3-1.557h4l-3-4h-4.337zm-3 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </BaseIcon>
));
export default SvgSchoolXmarkAlt;
