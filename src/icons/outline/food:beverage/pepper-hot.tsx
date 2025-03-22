import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPepperHot = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 11c1.5-3.033 3.102-3.847 4.5-3.5s2.286.99 2.678 2.607c.463 2.116-1.743 4.977-5.838 8.208-1.206.913-3.494 2.017-5.05 2.7-.698.293-1.595.053-2.099-.632-.503-.684-.391-1.616.247-2.2.393-.445.753-.76 1.112-1.076C8.185 15.62 9.5 14.033 11 11m0 0h3v2h3m.158-5.485 1.259-2.135c.462-.7.156-1.607-.545-2.07-.7-.462-1.607-.156-2.07.545l-.08.047"
    />
  </BaseIcon>
));
export default SvgPepperHot;
