import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgFire = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.1 17.6A7.2 7.2 0 0 1 12 21a6.6 6.6 0 0 1-5.8-3c-2.7-4.6.3-8.8.9-9.7A4.4 4.4 0 0 0 8 4c1.3 1 6.4 3.3 5.5 10.6 1.5-1.1 2.7-3 2.9-6.2 1.4 1 4 5.5 1.7 9.2"
      />
    </BaseIcon>
  ),
);
export default SvgFire;