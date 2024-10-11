import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgTeddyBear = forwardRef<
  SVGSVGElement,
  PropsWithoutRef<FlowbiteIconProps>
>((props, ref) => (
  <BaseIcon fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 0 1.677-4.17m6.698-3.827C17.012 7.003 18 6.105 18 5s-.922-2-2.059-2c-.896 0-1.685.743-1.968 1.52M8.127 6.995C7.002 6.995 6 6.105 6 5s.912-2 2.038-2c.934 0 1.706.678 1.947 1.52M14 18h-4m6-3-1.458-3.891m-6.635 2.879-.449.193a1.868 1.868 0 1 1-1.103-3.568L8.5 10m7.106 3.988.413.144a1.865 1.865 0 1 0 1.172-3.54l-1.746-.558M12 9.062v-.01m-1.378-1.554v-.01m3.034.01v-.01M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </BaseIcon>
));
export default SvgTeddyBear;
