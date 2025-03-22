import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgCarrot = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M16 8c-1.629-1.629-3.9-1.915-6.066.25S2.822 18.03 4.451 19.659s9.241-3.318 11.407-5.484C17.95 12.081 17.629 9.63 16 8m0 0 3.26-3.151M16 8V4m0 4h4m-3.798 5.802-2.2-2.215m-5.7-1.376 2.072 2.042m-1.259 3.184 2.112 2.163"
      />
    </BaseIcon>
  ),
);
export default SvgCarrot;
