import { forwardRef, type PropsWithoutRef } from "react";
import { BaseIcon } from "~/components/base-icon";
import type { FlowbiteIconProps } from "~/types";

const SvgPenNib = forwardRef<SVGSVGElement, PropsWithoutRef<FlowbiteIconProps>>(
  (props, ref) => (
    <BaseIcon fill="none" ref={ref} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 19 5.4-5.4m2.4-6.4 4 4-2 5.4L5.3 20 4 18.7l3.4-9.5zm4.6 4.6-5.2-5.2L14.8 4 20 9.2z"
      />
    </BaseIcon>
  ),
);
export default SvgPenNib;
